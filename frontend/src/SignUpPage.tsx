import React, { FormEvent, useState } from "react";
import classes from "./css/SignUpPage.module.css";
import AccountServices from "./services/AccountServices";

const SignUpPage = (props: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = () => {
    const invalidName: HTMLElement | null =
      document.getElementById("invalid-name");
    const invalidEmail: HTMLElement | null =
      document.getElementById("invalid-email");
    const invalidPassword: HTMLElement | null =
      document.getElementById("invalid-password");
    let validForm: boolean = true;
    // const errorMessage = document.getElementById("error");
    if (invalidName) {
      if (name === "") {
        invalidName.innerHTML = "* Enter a name";
        validForm = false;
      }
    }
    if (invalidEmail) {
      if (email === "") {
        invalidEmail.innerHTML = " * Enter a valid email";
        validForm = false;
      }
    }
    if (invalidPassword) {
      if (password === "") {
        invalidPassword.innerHTML = " * Enter a valid password";
        validForm = false;
      }
    }
    return validForm;
  };

  const handleNameChange = (e: any) => {
    const invalidName: HTMLElement | null =
      document.getElementById("invalid-name");
    setName(e.target.value);
    if (name.length > 0) {
      if (invalidName) {
        invalidName.innerHTML = "";
      }
    }
  };

  const handleEmailChange = (e: any) => {
    const invalidEmail: HTMLElement | null =
      document.getElementById("invalid-email");
    setEmail(e.target.value);
    if (email.length > 0) {
      if (invalidEmail) {
        invalidEmail.innerHTML = "";
      }
    }
  };

  const handlePasswordChange = (e: any) => {
    let invalidPassword: HTMLElement | null =
      document.getElementById("invalid-password");
    setPassword(e.target.value);
    if (invalidPassword) {
      invalidPassword.innerHTML = "";
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log(e);
      console.log("submitted");

      console.log("account => " + JSON.stringify({ name, email, password }));

      props.history.push("/");
      //uses the createAccount method from AccountServices.js
      // AccountServices.signup(name, email, password).then((res) => {
      //   props.history.push("/");
      // });
    }
  };

  return (
    <div className={classes.login}>
      <div className={classes.card}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <h1 className={classes["form-title"]}>Sign Up</h1>

          <label className={classes["form-text"]}>Name</label>
          <input
            type="text"
            placeholder="Enter name..."
            value={name}
            onChange={handleNameChange}
            className={classes["form-input"]}
          />
          <div className={classes["error-display"]}>
            <p className={classes["error-font"]} id="invalid-name"></p>
          </div>

          <label className={classes["form-text"]}>Email address</label>
          <input
            type="email"
            placeholder="Enter email..."
            value={email}
            onChange={handleEmailChange}
            className={classes["form-input"]}
          />
          <div className={classes["error-display"]}>
            <p className={classes["error-font"]} id="invalid-email"></p>
          </div>

          <label className={classes["form-text"]}>Password</label>
          <input
            type="password"
            placeholder="Enter Password..."
            value={password}
            onChange={handlePasswordChange}
            className={classes["form-input"]}
          />
          <div className={classes["error-display"]}>
            <p className={classes["error-font"]} id="invalid-password"></p>
          </div>

          <button type="submit" className={classes.signupbtn}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
