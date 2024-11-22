// Import required Firebase services
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Optional: Only if you're using storage

// Your Firebase configuration (replace with your actual project details)
const firebaseConfig = {
  apiKey: "AIzaSyAXIQdIL_mMFMIKCxM8V8iG3veBusLR5RU",
  authDomain: "native-721a5.firebaseapp.com",
  projectId: "native-721a5",
  storageBucket: "native-721a5.firebasestorage.app",
  messagingSenderId: "772516062950",
  appId: "1:772516062950:web:2f5cbd4df5b782cd65fd27",
  measurementId: "G-7Z6KCF73JS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optional: Initialize Firebase services
const auth = getAuth(app); // For authentication
const db = getFirestore(app); // For Firestore database
const storage = getStorage(app); // For Firebase Storage (if used)

// Export initialized Firebase services
export { app, auth, db, storage };
