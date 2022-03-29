// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
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
initializeApp(firebaseConfig);
// const firebaseApp=initializeApp(firebaseConfig);

//create provider instance to use GoogleAuthProvider
//may have dfrnt provider so instantiate
const goolgleProvider = new GoogleAuthProvider();

//take some config object tell df way google auth prov to behave
//just google auth UI
goolgleProvider.setCustomParameters({
  prompt: "select_account",
});

//MUST HAVE SAME AUTH FOR ENTIRE LIFECYCLE OF AN APP

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, goolgleProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, goolgleProvider);

//userAuth from signin as arg
export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformmation = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  //   console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  //without user google keep ref of uid as collection

  //if user does not exist
  //set/create doc with data from userAuth in my colection

  if (!userSnapshot.exists()) {
    //userAuth is arg passed as response.user in signIn comp
    //it has  displayName, email methods destructure it

    const { displayName, email } = userAuth;
    //record date user logged in

    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformmation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  //if user exist

  return userDocRef;
};
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
