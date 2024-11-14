// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "exemple-b0a56.firebaseapp.com",
  projectId: "exemple-b0a56",
  storageBucket: "exemple-b0a56.appspot.com",
  messagingSenderId: "486766812042",
  appId: "1:486766812042:web:acb499f34e9fa0dbe54673",
  measurementId: "G-ZNXL7YNQ1C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);