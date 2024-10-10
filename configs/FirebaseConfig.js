// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "url-o-matic-8f684.firebaseapp.com",
  projectId: "url-o-matic-8f684",
  storageBucket: "url-o-matic-8f684.appspot.com",
  messagingSenderId: "107956523692",
  appId: "1:107956523692:web:6ca45c8647e08d2a8ec509",
  measurementId: "G-S64E7GEHXZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);
