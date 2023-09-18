import React, { useRef, useState } from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";

// import ErrorIcon from "@mui/icons-material/Error";

const Singup = () => {
  const [formInputHandler, updteInputValue] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [errorMsg, setErrorMsg] = useState({});
  // form password show

  // const showpassword = () => {
  //   const input = showpas.current;
  //   if (input.type === "password") {
  //     show(true);

  //     input.type = "text";
  //   } else {
  //     show(false);
  //     input.type = "password";
  //   }
  // };

  const valueHandler = (e) => {
    const { value, name } = e.target;

    updteInputValue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const subMit = (e) => {
    e.preventDefault();
    setErrorMsg(validate(formInputHandler));
  };

  // validateion
  function validate(formInputHandler) {
    const error = {};
    console.log(error);
    if (!formInputHandler.fname) {
      error.fname = "Frist Name can not be Blank";
      return error;
    }

    if (!formInputHandler.lname) {
      error.lname = "Last Name can not be Blank";
      return error;
    }

    if (!formInputHandler.email) {
      error.email = "Email can not be Blank";
      return error;
    }

    if (!formInputHandler.password) {
      error.password = "password can not be blank";
      return error;
    }

    if (!formInputHandler.cpassword) {
      error.cpassword = "password can not be blank";
      return error;
    }

    if (formInputHandler.cpassword != formInputHandler.password) {
      error.password = "password can not be match";
      error.cpassword = "password can not be match";
      return error;
    }
    return error;
  }

  return (
    <div>
      <div></div>
      <form
        className="  m-auto"
        action=""
        onSubmit={subMit}
        style={{ width: "400px" }}
      >
        <div className="input-parent ">
          <input
            className={`form-control me-3 d-block ${
              errorMsg.fname ? "error" : "success"
            }`}
            onChange={valueHandler}
            type="text"
            id="fname"
            name="fname"
            autoFocus
            placeholder="Frist Name"
          />

          <div className="formDetecter">
            {errorMsg.fname ? (
              <ErrorIcon className="errorSymbol"></ErrorIcon>
            ) : (
              <CheckCircleIcon className="successSymbol"></CheckCircleIcon>
            )}
          </div>

          <small>{errorMsg?.fname}</small>
        </div>
        <div className="input-parent">
          <input
            onChange={valueHandler}
            type="text"
            id="lname"
            className={`form-control ${errorMsg.lname ? "error" : "success"}`}
            name="lname"
            placeholder=" last Name"
          />

          <div className="formDetecter">
            {errorMsg.lname ? (
              <ErrorIcon className="errorSymbol"></ErrorIcon>
            ) : (
              <CheckCircleIcon className="successSymbol"></CheckCircleIcon>
            )}
          </div>

          <small>{errorMsg?.lname}</small>
        </div>

        <div className="input-parent">
          <input
            onChange={valueHandler}
            type="email"
            name="email"
            id="email"
            className={`form-control ${errorMsg.email ? "error" : "success"}`}
            placeholder="email"
          />
          <div className="formDetecter">
            {errorMsg.email ? (
              <ErrorIcon className="errorSymbol"></ErrorIcon>
            ) : (
              <CheckCircleIcon className="successSymbol"></CheckCircleIcon>
            )}
          </div>

          <small>{errorMsg?.email}</small>
        </div>

        <div className="input-parent ">
          <input
            className={`form-control ${
              errorMsg.password ? "error" : "success"
            }`}
            onChange={valueHandler}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
          <div className="formDetecter">
            {errorMsg.password ? (
              <ErrorIcon className="errorSymbol"></ErrorIcon>
            ) : (
              <CheckCircleIcon className="successSymbol"></CheckCircleIcon>
            )}
          </div>
          <small>{errorMsg?.password}</small>
        </div>

        <div className="input-parent ">
          <input
            className={`form-control ${
              errorMsg.cpassword ? "error" : "success"
            }`}
            onChange={valueHandler}
            type="password"
            id="cpassword"
            name="cpassword"
            placeholder="Password"
          />
          <div className="formDetecter">
            {errorMsg.cpassword ? (
              <ErrorIcon className="errorSymbol"></ErrorIcon>
            ) : (
              <CheckCircleIcon className="successSymbol"></CheckCircleIcon>
            )}
          </div>
          <small>{errorMsg?.cpassword}</small>
        </div>

        <div className="d-flex justify-content-center">
          <input
            type="submit"
            value="Create Account"
            className="btn btn-primary "
          />
        </div>
        <p className="text-center pb-3 fs-5">Already have an account? login</p>
      </form>
    </div>
  );
};
export default Singup;
