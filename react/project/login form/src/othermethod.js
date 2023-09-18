import "./App.css";

import React, { useEffect, useState } from "react";

function App() {
  const [formValue, setFormValue] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const formValueHanfler = (e) => {
    // const { value, name } = e.target
    const value = e.target.value;
    const name = e.target.name;

    setFormValue((prev) => {
      return {
        ...prev,

        [name]: value,
      };
    });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValue));
    setIsSubmit(true);
    // document.write(
    //   '<div > <h1 id="message">congraulation your form have been sumbit </h1><div/>'
    // );
  };

  function getClassName(name) {
    if (formErrors[name]) {
      return "errors";
    } else if (formValue[name]) {
      return "valid";
    }
    return "";
  }

  function validate(values) {
    const emaliRegx = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,})+$/;
    const f = values.email;
    const errors = {};
    if (!values.fName) {
      errors.fName = "Name is Required";
    }
    if (!values.lName) {
      errors.lName = "Name is required";
    }

    if (!values.email) {
      errors.email = "Email is Required";
      // } else if (!emaliRegx.test(values.email)) {
      //   errors.email = "Enter valid email ";
      // }

      if (!values.phone) {
        errors.phone = "phone number is Required";
      }

      return errors;
    }
  }

  return (
    <>
      <div className="formValue">
        <h1 style={{ color: "white" }}>
          Hello {formValue.fName} {formValue.lName}
        </h1>

        <h3>{formValue.email}</h3>
        <h4>{formValue.phone}</h4>
      </div>
      <form action="" onSubmit={handlerSubmit}>
        <input
          className={getClassName("fName")}
          onChange={formValueHanfler}
          name="fName"
          type="text"
          value={formValue.fName}
          placeholder="Enter your frist Name"
        />
        <small>{formErrors?.lName}</small>
        <br />
        <input
          onChange={formValueHanfler}
          className={getClassName("lName")}
          name="lName"
          type="text"
          value={formValue.lName}
          placeholder="Enter your last Nmae"
        />
        <small>{formErrors?.lName}</small>
        <br />
        <input
          onChange={formValueHanfler}
          className={getClassName("email")}
          name="email"
          type="gmail"
          value={formValue.email}
          placeholder="Enter your Gmail"
        />
        <small>{formErrors && formErrors?.email}</small>
        <br />
        <input
          className={getClassName("phone")}
          onChange={formValueHanfler}
          name="phone"
          type="text"
          value={formValue.phone}
          placeholder="Enter your Phone number"
        />
        <small>{formErrors?.phone}</small>
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default App;
