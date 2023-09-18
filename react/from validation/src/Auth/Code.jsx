import React, { useRef, useState } from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";

// import ErrorIcon from "@mui/icons-material/Error";

const Code = () => {
  const [formInputHandler, updteInputValue] = useState({
    code: "",
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

    if (!formInputHandler.code) {
      error.code = "code cannot be blank";
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
        <div className="input-parent ">
          <input
            className={`form-control ${errorMsg.code ? "error" : "success"}`}
            onChange={valueHandler}
            type="text"
            id="password"
            name="code"
            placeholder="code"
          />
          <div className="formDetecter">
            {errorMsg.code ? (
              <ErrorIcon className="errorSymbol"></ErrorIcon>
            ) : (
              <CheckCircleIcon className="successSymbol"></CheckCircleIcon>
            )}
          </div>
          <small>{errorMsg?.code}</small>
        </div>

        <div className="d-flex justify-content-center">
          <input type="submit" value="send code" className="btn btn-primary " />
        </div>
      </form>
    </div>
  );
};
export default Code;
