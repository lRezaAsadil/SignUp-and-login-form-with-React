import React, { useEffect, useState } from "react";
import validate from "./validate";
import { notify } from "./notify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignUp = () => {
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
    <div>
      <form onSubmit={submitHandler}>
        <h1>Sign Up</h1>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="Name"
            value={data.Name}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.Name && focus.Name && <span>{errors.Name}</span>}
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="Email"
            value={data.Email}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.Email && focus.Email && <span>{errors.Email}</span>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="Password"
            name="Password"
            value={data.Password}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.Password && focus.Password && <span>{errors.Password}</span>}
        </div>
        <div>
          <label>Confrim Password</label>
          <input
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
        <div>
          <label>I accept terms of privacy policy</label>
          <input
            type="checkbox"
            name="isAccepted"
            value={data.isAccepted}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.isAccepted && focus.isAccepted && (
            <span>{errors.isAccepted}</span>
          )}
        </div>
        <div>
          <a href="#/">Login</a>
          <button type="submit">Sign up</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
