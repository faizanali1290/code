const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpasword");
document.getElementsByTagName("form")[0].addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
});

function validate() {
  const fnameVal = document.getElementById("fname").value.trim();
  const lnameVal = document.getElementById("lname").value.trim();
  const emailVal = document.getElementById("email").value.trim();
  const passwordVal = document.getElementById("password").value.trim();
  const cpasswordVal = document.getElementById("cpasword").value.trim();
  const regxEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!fnameVal) {
    setErrorMsg(fname, "Frist Name can not be Blank");
  } else {
    setSuccessMsg(fname);
  }
  if (!lnameVal) {
    setErrorMsg(lname, "Last Name can not be Blank");
  } else {
    setSuccessMsg(lname);
  }
  if (!emailVal) {
    setErrorMsg(email, "Email can not be Blank");
  } else if (emailVal == !regxEmail.test(emailVal)) {
    setErrorMsg(email, "Enter correct email adrress");
  } else {
    setSuccessMsg(email);
  }
  if (!passwordVal) {
    setErrorMsg(password, "password can not be blank");
  } else if (passwordVal !== cpasswordVal) {
    setErrorMsg(password, "password is not match");
  } else {
    setSuccessMsg(password);
  }

  if (!cpasswordVal) {
    setErrorMsg(cpassword, "password can not be blank");
  } else if (passwordVal !== cpasswordVal) {
    setErrorMsg(cpassword, "password is not match");
  } else {
    setSuccessMsg(cpassword);
  }
}

function setErrorMsg(input, ErrorMsg) {
  const fromcontrol = input.parentElement;
  fromcontrol.classList.add("error");
  const small = fromcontrol.querySelector("small");
  small.innerText = ErrorMsg;
  console.log(fromcontrol);
}
function setSuccessMsg(input) {
  const fromcontrol = input.parentElement;
  fromcontrol.classList.add("success");
  fromcontrol.classList.remove("error");
  const small = fromcontrol.querySelector("small");
  small.innerText = "";
}
