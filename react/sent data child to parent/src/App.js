import "./App.css";

import Child from "./child";
function App() {
  function user(p) {//here in p parameter we can access the child data

    console.log(p('faizan ali is '))
    // alert("weisodcvnweiosdcvnkwsdk "+p);
  }
  return (
    <>
      <Child parentdata={user} />
    </>
  );
}

export default App;
