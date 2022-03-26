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

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

//create provider instance to use GoogleAuthProvider
//may have dfrnt provider so instantiate
const provider = new GoogleAuthProvider();

//take some config object tell df way google auth prov to behave
//just google auth UI
provider.setCustomParameters({
  prompt: "select_account",
});

//MUST HAVE SAME AUTH FOR ENTIRE LIFECYCLE OF AN APP

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
