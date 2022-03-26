import React from "react";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      SignIn
      {/* check for access token in console */}
      <button onClick={logGoogleUser}>sign in with Google popup</button>
    </div>
  );
};

export default SignIn;
