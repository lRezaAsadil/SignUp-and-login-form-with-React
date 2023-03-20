import React, { useEffect, useState } from "react";
import validate from "./validate";
import { notify } from "./notify";
import styles from "./SignUp.module.css";
import { Link } from "react-router-dom"; 
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {usePageTitle} from"./usePageTitle.js"

const Login = () => {
    usePageTitle('Login');
  const [focus, setFocus] = useState({});
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    Email: "",
    Password: "",
  });
  //   changeHandler
  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  // useEffect
  useEffect(() => {
    setErrors(validate(data, "Login"));
  }, [data, focus]);
  // focusHandler
  const focusHandler = (event) => {
    setFocus({ ...focus, [event.target.name]: true });
  };
  //   submitHandler
  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notify("s", "You have logged in");
    } else {
      notify("invalid");
      setFocus({
        Email: true,
        Password: true,
      });
    }
  };
  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <h1 className={styles.header}>Login</h1>

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

        <div className={styles.formButtons}>
          <Link to="/signUp">Sign up</Link>
          <button type="submit">Login</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
