import React, { useState, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/Button";
import FormInput from "../form-input/FormInput";
import "./sign-up-form.styles.scss";
const defaultFormsFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formsFields, setFormsFields] = useState(defaultFormsFields);
  const { displayName, email, password, confirmPassword } = formsFields;

  const { setCurrentUser } = useContext(UserContext);
  const resetFormFields = () => {
    setFormsFields(defaultFormsFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormsFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    //pss match
    //user is auth with email pss
    //create user doc from response
    if (password !== confirmPassword) {
      alert("passwords do not match");
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      error.code === "auth/email-already-in-use"
        ? alert("Cannot create user, Email already in use")
        : console.log("user creation encountered an error", error.message);
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account</h2>
      <span>Sign Up with Your Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          onChange={handleChange}
          required
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit">SignUp</Button>
      </form>
    </div>
  );
};

export default SignUp;
