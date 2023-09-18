import "./App.css";
import Login from "./Auth/Login";

import Singup from "./Auth/Singup";
import Code from "./Auth/Code";
import ChangePassword from "./Auth/ChangePassword";
function App() {
  return (
    <>
      <Singup />
      <Login />
      <Code />
      <ChangePassword/>
    </>
  );
}

export default App;
