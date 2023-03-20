import React, { useEffect, useState } from "react";
import validate from "./validate";
import { notify } from "./notify";
import styles from "./SignUp.module.css";
import { usePageTitle } from "./usePageTitle.js";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
const SignUp = () => {
  usePageTitle("signUp");
  const [focus, setFocus] = useState({});
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    Name: "",
    Email: "",
    Password: "",
    ConfrimPassword: "",
    isAccepted: false,
  });
  //   changeHandler
  const changeHandler = (event) => {
    if (event.target.name === "IsAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };
  // useEffect
  useEffect(() => {
    setErrors(validate(data, "signUp"));
  }, [data, focus]);
  // focusHandler
  const focusHandler = (event) => {
    setFocus({ ...focus, [event.target.name]: true });
  };
  //   submitHandler
  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notify("s", "You signed successfully");
    } else {
      notify("invalid");
      setFocus({
        Name: true,
        Email: true,
        Password: true,
        ConfrimPassword: true,
        isAccepted: true,
      });
    }
  };
  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <h1 className={styles.header}>Sign Up</h1>
        <div className={styles.formField}>
          <label>Name</label>
          <input
            className={
              errors.name && focus.name ? styles.uncompleted : styles.formInput
            }
            type="text"
            name="Name"
            value={data.Name}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.Name && focus.Name && <span>{errors.Name}</span>}
        </div>
        <div className={styles.formField}>
          <label>Email</label>
          <input
            className={
              errors.Email && focus.Email
                ? styles.uncompleted
                : styles.formInput
            }
            type="text"
            name="Email"
            value={data.Email}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.Email && focus.Email && <span>{errors.Email}</span>}
        </div>
        <div className={styles.formField}>
          <label>Password</label>
          <input
            className={
              errors.Password && focus.Password
                ? styles.uncompleted
                : styles.formInput
            }
            type="Password"
            name="Password"
            value={data.Password}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.Password && focus.Password && <span>{errors.Password}</span>}
        </div>
        <div className={styles.formField}>
          <label>Confrim Password</label>
          <input
            className={
              errors.ConfrimPassword && focus.ConfrimPassword
                ? styles.uncompleted
                : styles.formInput
            }
            type="Password"
            name="ConfrimPassword"
            value={data.ConfrimPassword}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.ConfrimPassword && focus.ConfrimPassword && (
            <span>{errors.ConfrimPassword}</span>
          )}
        </div>
        <div className={styles.formField}>
          <div className={styles.checkBoxContainer}>
            <label>I accept terms of privacy policy</label>
            <input
              className={
                errors.isAccepted && focus.isAccepted
                  ? styles.uncompleted
                  : styles.formInput
              }
              type="checkbox"
              name="isAccepted"
              value={data.isAccepted}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
          </div>
          {errors.isAccepted && focus.isAccepted && (
            <span>{errors.isAccepted}</span>
          )}
        </div>
        <div className={styles.formButtons}>
          <Link to="/login">Login</Link>
          <button type="submit">Sign up</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
