import React from "react";
import SignUp from "../../components/sign-up-form/SignUp";
import SignInForm from "../../components/sign-in-form/SignIn";
import "./authentication.styles.scss";

const SignIn = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUp />
    </div>
  );
};

export default SignIn;
