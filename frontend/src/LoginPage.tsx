import React, { FormEvent, useState } from "react";
import { withRouter } from "react-router-dom";
import classes from "./LoginPage.module.css";
import AccountServices from "./services/AccountServices";

const LoginPage = (props: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = () => {
    const invalidEmail: HTMLElement | null =
      document.getElementById("invalid-email");
    const invalidPassword: HTMLElement | null =
      document.getElementById("invalid-password");
    let validForm: boolean = true;
    // const errorMessage = document.getElementById("error");

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
      props.history.push("/");
    }

    // AccountServices.login(email, password).then((res) => {
    //   props.history.push("/");
    // });
  };

  return (
    <div className={classes.login}>
      <div className={classes.card}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <h1 className={classes["form-title"]}>Login</h1>

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

          <button type="submit" className={classes.loginbtn}>
            Login
          </button>
          <p className={classes["form-text"]}>
            Not a member? Sign up{" "}
            <a href="/signup" className={classes.link}>
              here
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
