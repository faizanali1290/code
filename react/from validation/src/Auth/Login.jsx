import React, { useRef, useState } from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";

// import ErrorIcon from "@mui/icons-material/Error";

const Login = () => {
  const [formInputHandler, updteInputValue] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState({});
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

    if (!formInputHandler.email) {
      error.email = "Email can not be Blank";
    }
    if (!formInputHandler.password) {
      error.password = "password can not be blank";
    }
    return error;
  }

  return (
    <div>
      <div></div>
      <form
        className="m-auto"
        action=""
        onSubmit={subMit}
        style={{ width: "400px" }}
      >
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

        <div className="d-flex justify-content-center">
          <input
            type="submit"
            value="Create Account"
            className="btn btn-primary "
          />
        </div>
        <p>forget password</p>
        <p className="text-center pb-3 fs-3">Singup</p>
      </form>
    </div>
  );
};
export default Login;
