import React, { useState } from "react";

const SignUp = () => {
  const [data, setData] = useState({
    Name: "",
    Email: "",
    Password: "",
    ConfrimPassword: "",
    IsAccepted: false,
  });
  const changeHandler = (event) => {
    if (event.target.name === "IsAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
    console.log(data);
  };
  return (
    <div>
      <form>
        <h1>Sign Up</h1>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="Name"
            value={data.Name}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="Email"
            value={data.Email}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="Password"
            name="Password"
            value={data.Password}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Confrim Password</label>
          <input
            type="Password"
            name="ConfrimPassword"
            value={data.ConfrimPassword}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>I accept terms of privacy policy</label>
          <input
            type="checkbox"
            name="IsAccepted"
            value={data.IsAccepted}
            onChange={changeHandler}
          />
        </div>
        <div>
          <a href="#/">Login</a>
          <button type="submit">Sign up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
