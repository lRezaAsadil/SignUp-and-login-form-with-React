const validate = (data, type) => {
  const errors = {};

  if (type === "signUp") {
    // validate Name
    if (!data.Name.trim()) {
      errors.Name = "Name is required";
    } else {
      delete errors.Name;
    }
    // validate Email
    if (!data.Email) {
      errors.Email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.Email)) {
      errors.Email = "Email address is invalid";
    } else {
      delete errors.Email;
    }
    // validate Password
    if (!data.Password) {
      errors.Password = "password is required";
    } else if (data.Password.length < 6) {
      errors.Password = "Password need to be 6 character or more";
    } else {
      delete errors.Password;
    }
    // validate confrim password
    if (!data.ConfrimPassword) {
      errors.ConfrimPassword = " Confrim Password";
    } else if (data.ConfrimPassword !== data.Password) {
      errors.ConfrimPassword = "Password do not match";
    } else {
      delete errors.ConfrimPassword;
    }
    // validate isAccepted
    if (!data.IsAccepted) {
      errors.isAccepted = "Accept our regulations";
    } else {
      delete errors.isAccepted;
    }
  }
  return errors;
};
export default validate;
