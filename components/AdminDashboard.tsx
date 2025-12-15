
import React, { useState, useEffect } from 'react';
import { db, firebaseConfig } from '../firebase';
import { collection, onSnapshot, doc, setDoc, deleteDoc, updateDoc } from 'firebase/firestore';
import { initializeApp, deleteApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signOut as secondarySignOut } from 'firebase/auth';
import { UserProfile } from '../types';
import { Users, UserPlus, Trash2, Calendar, Lock, Unlock, RefreshCw, Loader2, X, Search, ShieldAlert, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const AdminDashboard: React.FC = () => {
  const { logout } = useAuth();
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Modal States
  const [showCreateModal, setShowCreateModal] = useState(false);
  
  // Create User Form State
  const [newUsername, setNewUsername] = useState(''); // Changed from email
  const [newPassword, setNewPassword] = useState('');
  const [newRole, setNewRole] = useState<'MEMBER' | 'ADMIN'>('MEMBER');
  const [newExpiry, setNewExpiry] = useState('');
  const [isCreating, setIsCreating] = useState(false);

  // Fetch Users
  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'users'), (snapshot) => {
      const userList = snapshot.docs.map(doc => doc.data() as UserProfile);
      setUsers(userList);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCreating(true);

    // TRICK: Initialize a secondary Firebase App to create a user without logging out the Admin
    const secondaryApp = initializeApp(firebaseConfig, "SecondaryApp");
    const secondaryAuth = getAuth(secondaryApp);

    // Auto-generate internal email from username
    const username = newUsername.trim();
    const emailToCreate = username.includes('@') ? username : `${username}@render.ai`;

    try {
      // 1. Create Auth User
      const userCredential = await createUserWithEmailAndPassword(secondaryAuth, emailToCreate, newPassword);
      const uid = userCredential.user.uid;

      // 2. Create Firestore Profile
      const newUser: UserProfile = {
        uid,
        email: emailToCreate,
        role: newRole,
        createdAt: Date.now(),
        passwordVersion: 1,
        isDisabled: false,
        expiryDate: newExpiry ? new Date(newExpiry).toISOString() : undefined
      };

      await setDoc(doc(db, 'users', uid), newUser);

      // 3. Cleanup
      await secondarySignOut(secondaryAuth);
      await deleteApp(secondaryApp);

      setShowCreateModal(false);
      setNewUsername('');
      setNewPassword('');
      setNewExpiry('');
      alert(`User created successfully!\n\nID: ${username}\nPassword: ${newPassword}\n\nSend these credentials to the member.`);
    } catch (error: any) {
      console.error("Creation Error:", error);
      if (error.code === 'auth/email-already-in-use') {
        alert(`Failed: The ID "${username}" is already taken. Please choose a different one.`);
      } else if (error.code === 'auth/weak-password') {
        alert("Failed: Password must be at least 6 characters.");
      } else if (error.code === 'auth/invalid-email') {
        alert("Failed: Invalid ID format.");
      } else {
        alert("Error creating user: " + error.message);
      }
    } finally {
      setIsCreating(false);
      // Ensure app is deleted even on error
      try { await deleteApp(secondaryApp); } catch(e){}
    }
  };

  const handleDeleteUser = async (uid: string) => {
    if (confirm("Are you sure you want to delete this user? They will lose access immediately.")) {
        // Note: This only deletes the Firestore record. The Auth record remains but 
        // AuthContext logic will prevent login/kick them out because the Firestore doc is missing.
        await deleteDoc(doc(db, 'users', uid));
    }
  };

  const handleToggleStatus = async (user: UserProfile) => {
     await updateDoc(doc(db, 'users', user.uid), {
         isDisabled: !user.isDisabled
     });
  };

  const handleForceLogout = async (user: UserProfile) => {
      // Incrementing passwordVersion triggers the listener in AuthContext to log them out
      if (confirm("This will force the user to log out immediately. Continue?")) {
        await updateDoc(doc(db, 'users', user.uid), {
            passwordVersion: (user.passwordVersion || 0) + 1
        });
      }
  };

  const handleUpdateExpiry = async (uid: string, date: string) => {
      await updateDoc(doc(db, 'users', uid), {
          expiryDate: date ? new Date(date).toISOString() : null
      });
  };

  const filteredUsers = users.filter(u => 
    u.email.toLowerCase().includes(searchTerm.toLowerCase()) || 
    u.uid.includes(searchTerm)
  );

  // Helper to display friendly username
  const getDisplayUsername = (email: string) => {
      return email.endsWith('@render.ai') ? email.split('@')[0] : email;
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-200 font-roboto p-6">
       <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 bg-[#0c1421] p-6 rounded-2xl border border-white/10 shadow-xl">
              <div className="flex items-center gap-4">
                  <div className="bg-blue-600/20 p-3 rounded-xl">
                      <ShieldAlert className="w-8 h-8 text-blue-400" />
                  </div>
                  <div>
                      <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
                      <p className="text-zinc-500 text-sm">Manage membership access and permissions</p>
                  </div>
              </div>
              <button onClick={() => logout()} className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors">
                  <LogOut size={16} /> Logout
              </button>
          </div>

          {/* Controls */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
              <div className="relative w-full md:w-96">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
                  <input 
                    type="text" 
                    placeholder="Search users..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:border-blue-500 outline-none"
                  />
              </div>
              <button 
                onClick={() => setShowCreateModal(true)}
                className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20 transition-all"
              >
                  <UserPlus size={18} /> Add New Member
              </button>
          </div>

          {/* Users Table */}
          <div className="bg-[#0c1421] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                      <thead>
                          <tr className="bg-zinc-900/50 text-zinc-400 text-xs uppercase tracking-wider border-b border-white/5">
                              <th className="p-4 font-bold">User (ID)</th>
                              <th className="p-4 font-bold">Role</th>
                              <th className="p-4 font-bold">Status</th>
                              <th className="p-4 font-bold">Expiry Date</th>
                              <th className="p-4 font-bold text-right">Actions</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                          {loading ? (
                              <tr><td colSpan={5} className="p-8 text-center"><Loader2 className="w-6 h-6 animate-spin mx-auto text-blue-500"/></td></tr>
                          ) : filteredUsers.length === 0 ? (
                              <tr><td colSpan={5} className="p-8 text-center text-zinc-500">No users found.</td></tr>
                          ) : (
                              filteredUsers.map(user => (
                                  <tr key={user.uid} className="hover:bg-white/5 transition-colors group">
                                      <td className="p-4">
                                          <div className="flex flex-col">
                                              <span className="font-bold text-white text-sm">{getDisplayUsername(user.email)}</span>
                                              <span className="text-[10px] text-zinc-500 font-mono">{user.uid}</span>
                                          </div>
                                      </td>
                                      <td className="p-4">
                                          <span className={`px-2 py-1 rounded text-[10px] font-bold ${user.role === 'ADMIN' ? 'bg-purple-500/20 text-purple-300' : 'bg-blue-500/20 text-blue-300'}`}>
                                              {user.role}
                                          </span>
                                      </td>
                                      <td className="p-4">
                                          <button onClick={() => handleToggleStatus(user)} className={`flex items-center gap-1.5 px-2 py-1 rounded border text-[10px] font-bold transition-all ${user.isDisabled ? 'bg-red-500/10 border-red-500/30 text-red-400 hover:bg-red-500/20' : 'bg-green-500/10 border-green-500/30 text-green-400 hover:bg-green-500/20'}`}>
                                              {user.isDisabled ? <><Lock size={10} /> Disabled</> : <><Unlock size={10} /> Active</>}
                                          </button>
                                      </td>
                                      <td className="p-4">
                                          <div className="flex items-center gap-2">
                                              <input 
                                                type="date" 
                                                className="bg-zinc-900 border border-white/10 rounded px-2 py-1 text-xs text-zinc-300 outline-none focus:border-blue-500"
                                                value={user.expiryDate ? user.expiryDate.split('T')[0] : ''}
                                                onChange={(e) => handleUpdateExpiry(user.uid, e.target.value)}
                                              />
                                              {user.expiryDate && new Date(user.expiryDate) < new Date() && (
                                                  <span className="text-[10px] text-red-400 font-bold bg-red-500/10 px-1.5 py-0.5 rounded">EXPIRED</span>
                                              )}
                                          </div>
                                      </td>
                                      <td className="p-4">
                                          <div className="flex items-center justify-end gap-2">
                                              <button 
                                                onClick={() => handleForceLogout(user)}
                                                className="p-2 bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20 rounded-lg transition-colors"
                                                title="Force Logout / Reset Session"
                                              >
                                                  <RefreshCw size={14} />
                                              </button>
                                              <button 
                                                onClick={() => handleDeleteUser(user.uid)}
                                                className="p-2 bg-red-500/10 text-red-500 hover:bg-red-500/20 rounded-lg transition-colors"
                                                title="Delete User"
                                              >
                                                  <Trash2 size={14} />
                                              </button>
                                          </div>
                                      </td>
                                  </tr>
                              ))
                          )}
                      </tbody>
                  </table>
              </div>
          </div>
       </div>

       {/* CREATE USER MODAL */}
       {showCreateModal && (
           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
               <div className="bg-[#0c1421] border border-white/10 rounded-2xl w-full max-w-md p-6 shadow-2xl animate-in zoom-in-95">
                   <div className="flex items-center justify-between mb-6">
                       <h3 className="text-xl font-bold text-white">Add New Member</h3>
                       <button onClick={() => setShowCreateModal(false)} className="text-zinc-500 hover:text-white"><X size={20}/></button>
                   </div>
                   
                   <form onSubmit={handleCreateUser} className="space-y-4">
                       <div>
                           <label className="block text-xs font-bold text-zinc-400 mb-1">Username (ID)</label>
                           <input 
                             type="text" 
                             required 
                             value={newUsername} 
                             onChange={e => setNewUsername(e.target.value.trim())} 
                             className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-sm focus:border-blue-500 outline-none" 
                             placeholder="e.g. member01" 
                           />
                           <p className="text-[10px] text-zinc-500 mt-1">This will be used for login. (No email required)</p>
                       </div>
                       <div>
                           <label className="block text-xs font-bold text-zinc-400 mb-1">Initial Password</label>
                           <input type="text" required value={newPassword} onChange={e => setNewPassword(e.target.value)} className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-sm focus:border-blue-500 outline-none font-mono" placeholder="RandomString123" />
                       </div>
                       <div className="grid grid-cols-2 gap-4">
                           <div>
                                <label className="block text-xs font-bold text-zinc-400 mb-1">Role</label>
                                <select value={newRole} onChange={e => setNewRole(e.target.value as any)} className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-sm focus:border-blue-500 outline-none">
                                    <option value="MEMBER">Member</option>
                                    <option value="ADMIN">Admin</option>
                                </select>
                           </div>
                           <div>
                                <label className="block text-xs font-bold text-zinc-400 mb-1">Expiry Date (Optional)</label>
                                <input type="date" value={newExpiry} onChange={e => setNewExpiry(e.target.value)} className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-sm focus:border-blue-500 outline-none" />
                           </div>
                       </div>
                       
                       <div className="pt-4">
                           <button type="submit" disabled={isCreating} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2">
                               {isCreating ? <Loader2 className="animate-spin"/> : "Create User"}
                           </button>
                       </div>
                   </form>
               </div>
           </div>
       )}
    </div>
  );
};

export default AdminDashboard;
