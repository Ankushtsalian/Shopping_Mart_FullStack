// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrR5_zPGImHiNr0IxvcDX5qNNaeUXK5VU",
  authDomain: "shopping-mart-84089.firebaseapp.com",
  projectId: "shopping-mart-84089",
  storageBucket: "shopping-mart-84089.appspot.com",
  messagingSenderId: "791379128682",
  appId: "1:791379128682:web:e0b52f230f15674a01b513",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
