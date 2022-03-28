import React, { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

const defaultFormsFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formsFields, setFormsFields] = useState(defaultFormsFields);
  const { displayName, email, password, confirmPassword } = formsFields;

  console.log(formsFields);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormsFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match");
    }

    try {
      const userDocRef = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
    } catch (error) {
      console.log("user creation encountered an error", error.message);
    }
    // console.log(us);
    //pss match
    //user is auth with email pss
    //create user doc from response
  };
  return (
    <div>
      <h1>Sign Up with Your Email and Password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          type="text"
          onChange={handleChange}
          required
          name="displayName"
          value={displayName}
        />

        <label>Email</label>
        <input
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <label>Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <button type="submit">SignUp</button>
      </form>
    </div>
  );
};

export default SignUp;
