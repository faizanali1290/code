import "./App.css";

import React, { useState } from "react";

function App() {
  const [formValue, setformValue] = useState({
    fName: "",
    lName: "",
    gmail: "",
    phone: "",
  });

  const formValueHanfler = (e) => {
    // const value = e.target.value
    // const name = e.target.name

    //  const {value,name,type,placeholder}=e.target
    const { value, name } = e.target;

    setformValue((prev) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prev.lName,
          gmail: prev.gmail,
          phone: prev.phone,
        };
      } else if (name === "lName") {
        return {
          fName: prev.fName,
          lName: value,
          gmail: prev.gmail,
          phone: prev.phone,
        };
      } else if (name === "gmail") {
        return {
          fName: prev.fName,
          lName: prev.lName,
          gmail: value,
          phone: prev.gmail,
        };
      } else if (name === "phone") {
        return {
          fName: prev.fName,
          lName: prev.lName,
          gmail: prev.gmail,
          phone: value,
        };
      }
    });
  };

  const handlerSubmit = (e) => {
    // e.preventDefault()

    document.write(
      '<div > <h1 id="message">congraulation your form have been sumbit </h1><div/>'
    );
  };

  return (
    <>
      <div className="formValue">
        <h1 style={{ color: "white" }}>
          Hello {formValue.fName} {formValue.lName}
        </h1>

        <h3>{formValue.gmail}</h3>
        <h4>{formValue.phone}</h4>
      </div>
      <form action="" onSubmit={handlerSubmit}>
        <input
          onChange={formValueHanfler}
          name="fName"
          type="text"
          value={formValue.fName}
          placeholder="Enter your frist Name"
        />
        <br />
        <input
          onChange={formValueHanfler}
          name="lName"
          type="text"
          value={formValue.lName}
          placeholder="Enter your last Nmae"
        />
        <br />
        <input
          onChange={formValueHanfler}
          name="gmail"
          type="gmail"
          value={formValue.gmail}
          placeholder="Enter your Gmail"
        />
        <br />
        <input
          onChange={formValueHanfler}
          name="phone"
          type="text"
          value={formValue.phone}
          placeholder="Enter your Phone number"
        />

        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default App;
