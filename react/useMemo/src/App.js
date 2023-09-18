import "./App.css";
import { useState, useMemo } from "react";

function App() {
  const [istoogle, settoogle] = useState(false);
  const [Bstate, upstate] = useState(1);

  // getvalue

  function getvalue() {
    upstate(Bstate + 1);
  }

  // usememo
  const memofun = () => {
    console.log("here");

    for (let i = 0; i < 1000000; i++) {}
    return Bstate * 8;
  };

  // if we click on istoogle button the funcion call automatically  call the function we does not now to call this function i want to call this functon  when click the Bstate to resolve this issue we used to use usememo

  // console.log(memofun)

  return (
    <div>
      <h1>hi</h1>
      <h1>{Bstate}</h1>
      <p>memo value {memofun}</p>
      <button onClick={getvalue}>state change</button>
      <h2 onClick={() => settoogle(!istoogle)}>
        {" "}
        {istoogle ? "click me" : "click me plz"}{" "}
      </h2>
    </div>
  );
}

export default App;
