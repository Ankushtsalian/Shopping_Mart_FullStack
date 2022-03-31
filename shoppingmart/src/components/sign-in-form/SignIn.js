import React, { useState } from "react";

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import Button from "../button/Button";
import FormInput from "../form-input/FormInput";
import "./sign-in-form.styles.scss";

const defaultFormsFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formsFields, setFormsFields] = useState(defaultFormsFields);
  const { email, password } = formsFields;

  // const { setCurrentUser } = useContext(UserContext);

  const logGoogleUser = async () => {
    // const response = await signInWithGooglePopup();
    //user is from resopne just destructuring response as we need only user
    await signInWithGooglePopup();
    // setCurrentUser(user);
  };

  const resetFormFields = () => {
    setFormsFields(defaultFormsFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormsFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // const { user } = await signInAuthUserWithEmailAndPassword(
      // setCurrentUser(user);
      await signInAuthUserWithEmailAndPassword(email, password);
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("No user associated with this Email");
          break;
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        default:
          console.log(error);
      }
    }

    resetFormFields();
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account</h2>
      <span>Sign In with Your Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          {/* check for access token in console */}
          <Button type="button" buttonType="google" onClick={logGoogleUser}>
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
