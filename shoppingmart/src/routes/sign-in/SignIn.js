import React, { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  //whenever app unmounts while redirecyed and Mounts again while just run effect
  //auth is only way to keeps track of authentication state of whole app and weather user are properly authenticated or not
  const redirectResult = async () => {
    const response = await getRedirectResult(auth);
    if (response) {
      const userDocRef = await createUserDocumentFromAuth(response.user);
    }
  };
  useEffect(() => redirectResult(), []);

  const logGoogleUser = async () => {
    // const response = await signInWithGooglePopup();
    //user is from resopne just destructuring response as we need only user
    const { user } = await signInWithGooglePopup();
    // console.log(user);
    // createUserDocumentFromAuth(user);
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      SignIn with Google
      {/* check for access token in console */}
      <button onClick={logGoogleUser}>sign in with Google popup</button>
      {/* as we are redirecting logGoogleRedirectUser doesnt do anything so call it directly in onclick */}
      <button onClick={signInWithGoogleRedirect}>
        sign in with Google Redirect
      </button>
    </div>
  );
};

export default SignIn;
