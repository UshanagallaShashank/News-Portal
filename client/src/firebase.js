// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-mern-76905.firebaseapp.com",
  projectId: "blog-app-mern-76905",
  storageBucket: "blog-app-mern-76905.appspot.com",
  messagingSenderId: "825880213110",
  appId: "1:825880213110:web:61ae2c63587259c6d55157",
  measurementId: "G-TYD6CWCESB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
