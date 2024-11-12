// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "chitary-blog.firebaseapp.com",
  projectId: "chitary-blog",
  storageBucket: "chitary-blog.firebasestorage.app",
  messagingSenderId: "652028041265",
  appId: "1:652028041265:web:bc65247408d38b51929d10"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);