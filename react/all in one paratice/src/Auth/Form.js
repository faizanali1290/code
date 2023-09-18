import React, { useRef, useState } from "react";
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Form = () => {
  const [formInputHandler, updteInputValue] = useState({
    fname: "",
    lname: "",
    // password: "",
    // cpassword: "",
  });
  const [errorMsg, setErrorMsg] = useState({});
  // const [successMsg, setSuccessMsg] = useState({});
  // const [hide, show] = useState(false);
  // const showpas = useRef();
  // const confpas = useRef();

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

  // const showconf = () => {
  //   const input = confpas.current;
  //   if (input.type === "password") {
  //     confshow(true);
  //     input.type = "text";
  //   } else {
  //     input.type = "password";
  //     confshow(false);
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
    const success = {};
    if (!formInputHandler.fname) {
      error.fname = "Frist Name can not be Blank";
    } else {
      // success.fname = "fname";
    }
    if (!formInputHandler.lname) {
      error.lname = "Last Name can not be Blank";
    } else {
      // success.fname='fname'
    }
    return error;
    // if (!formInputHandler.email) {
    //   setErrorMsg(email, "Email can not be Blank");
    // } else if (formInputHandler.email == !regxEmail.test(formInputHandler.email)) {
    //   setErrorMsg(email, "Enter correct email adrress");
    // } else {
    //   setSuccessMsg(email);
    // }
    // if (!formInputHandler.password) {
    //   setErrorMsg(password, "password can not be blank");
    // } else if (formInputHandler.password !== formInputHandler.cpassword) {
    //   setErrorMsg(password, "password is not match");
    // } else {
    //   setSuccessMsg(password);
    // }

    // if (!formInputHandler.cpassword) {
    //   setErrorMsg(cpassword, "password can not be blank");
    // } else if (formInputHandler.password !== formInputHandler.cpassword) {
    //   setErrorMsg(cpassword, "password is not match");
    // } else {
    //   setSuccessMsg(cpassword);
    // }
  }

  return (
    <div>
      <form className=" w-50  m-auto" action="" onSubmit={subMit}>
        <div className="input-parent ">
          <input
            onChange={valueHandler}
            type="text"
            id="fname"
            className="form-control me-3 d-block "
            name="fname"
            autoFocus
            placeholder="Frist Name"
          />
          <div className="errorDiv"></div>
          <div className="successDiv"></div>
          <small>{errorMsg?.fname}</small>
        </div>
        <div className="input-parent">
          <input
            onChange={valueHandler}
            type="text"
            id="lname"
            className="form-control"
            name="lname"
            placeholder=" last Name"
          />
          <div className="errorDiv"></div>
          <div className="successDiv"></div>

          <small>{errorMsg?.lname}</small>
        </div>

        {/* <div className="  input-parent">
          <input
            onChange={valueHandler}
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="email"
          />
          <i className="fa-solid fa-circle-check"></i>
          <i className="fa-solid fa-circle-exclamation"></i>
          <small></small>
        </div>

        <div className="password  input-parent ">
          <input
            onChange={valueHandler}
            type="password"
            id="password"
            className="form-control"
            name="password"
            placeholder="Password"
          />
          <i className="fa-solid fa-circle-check"></i>
          <i className="fa-solid fa-circle-exclamation"></i>
          <small></small>
        </div>

        <div className=" input-parent">
          <input
            onChange={valueHandler}
            type="password"
            id="cpasword"
            className="form-control"
            name="cpasword"
            placeholder="Confirm Password"
          />
          <i className="fa-solid fa-circle-check"></i>
          <i className="fa-solid fa-circle-exclamation"></i>
          <small></small>
        </div> */}

        <div className="d-flex justify-content-center">
          <input
            type="submit"
            value="Create Account"
            className="btn btn-primary btn-lg  "
          />
        </div>
        <p className="text-center pb-3 fs-3">Already have an account? login</p>
      </form>
    </div>
  );
};
export default Form;
