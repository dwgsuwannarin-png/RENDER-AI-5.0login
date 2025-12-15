
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { onAuthStateChanged, signOut, User as FirebaseUser } from 'firebase/auth';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { UserProfile } from '../types';

interface AuthContextType {
  currentUser: FirebaseUser | null;
  userProfile: UserProfile | null;
  loading: boolean;
  logout: () => Promise<void>;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  // 1. Listen for Firebase Auth State Changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (!user) {
        setUserProfile(null);
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  // 2. Real-time Listener on Firestore Profile (Handles Force Logout & Expiry)
  useEffect(() => {
    if (!currentUser) return;

    // Listen to the specific user document in Firestore
    const userDocRef = doc(db, 'users', currentUser.uid);
    
    const unsubscribeSnapshot = onSnapshot(userDocRef, async (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data() as UserProfile;
        
        // CHECK 1: Is Account Disabled?
        if (data.isDisabled) {
           alert("Your account has been disabled by the administrator.");
           await signOut(auth);
           return;
        }

        // CHECK 2: Is Expired?
        if (data.expiryDate) {
            const now = new Date();
            const expiry = new Date(data.expiryDate);
            if (now > expiry) {
                alert("Your membership has expired.");
                await signOut(auth);
                return;
            }
        }

        // CHECK 3: Password Version Change (Force Logout)
        // If we had a local version state, we would compare it. 
        // For simplicity, if the role changes or major status changes, we update state.
        // In a more complex app, we'd store `passwordVersion` in local storage on login and compare here.
        
        setUserProfile(data);
      } else {
        // Document doesn't exist (Deleted user)
        await signOut(auth);
      }
      setLoading(false);
    }, (error) => {
      console.error("Auth Snapshot Error:", error);
      setLoading(false);
    });

    return () => unsubscribeSnapshot();
  }, [currentUser]);

  const logout = async () => {
    await signOut(auth);
  };

  const value = {
    currentUser,
    userProfile,
    loading,
    logout,
    isAdmin: userProfile?.role === 'ADMIN'
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
