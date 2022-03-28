import React from "react";
import SignUp from "../../components/sign-up-form/SignUp";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
const SignIn = () => {
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
      <h1>SignIn with Google</h1>
      <br />
      {/* check for access token in console */}
      <button onClick={logGoogleUser}>sign in with Google popup</button>
      <SignUp />
    </div>
  );
};

export default SignIn;
