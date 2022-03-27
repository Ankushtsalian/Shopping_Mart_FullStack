import React from "react";

const defaultFormsFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUp = () => {
  return (
    <div>
      <h1>Sign Up with Your Email and Password</h1>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input type="text" />

        <label>Email</label>
        <input type="email" />

        <label>Password</label>
        <input type="password" />

        <label>Confirm Password</label>
        <input type="password" />

        <button type="submit">SignUp</button>
      </form>
    </div>
  );
};

export default SignUp;
