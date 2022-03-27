import React, { useState } from "react";

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
  return (
    <div>
      <h1>Sign Up with Your Email and Password</h1>
      <form
        onSubmit={() => {
          //   handleSubmit;
        }}
      >
        <label>Display Name</label>
        <input
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <label>Email</label>
        <input
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />

        <label>Password</label>
        <input
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />

        <label>Confirm Password</label>
        <input
          type="password"
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
