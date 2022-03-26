import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
const SignIn = () => {
  const logGoogleUser = async () => {
    // const response = await signInWithGooglePopup();
    //user is from resopne just destructuring response as we need only user
    const { user } = await signInWithGooglePopup();
    // console.log(response);
    createUserDocumentFromAuth(user);
  };
  return (
    <div>
      SignIn with Google
      <br />
      {/* check for access token in console */}
      <button onClick={logGoogleUser}>sign in with Google popup</button>
    </div>
  );
};

export default SignIn;
