
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEbV7XKLjfdVdUw0noRiwZQY6fLaoHmh8",
  authDomain: "perpect-ai.firebaseapp.com",
  projectId: "perpect-ai",
  storageBucket: "perpect-ai.firebasestorage.app",
  messagingSenderId: "406483682660",
  appId: "1:406483682660:web:906433e29a1d8718dc6671",
  measurementId: "G-M112WY1H3C"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export { firebaseConfig }; // Export config for secondary app initialization
export default app;
