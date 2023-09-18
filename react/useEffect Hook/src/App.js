// import { cleanup } from "@testing-library/react";
import React, { useEffect, useState } from "react";

export default function App() {
  // const [count,countIn]=useState(0)
  // if we perform side effect function component that we use use effect
  // useEffect(()=>{
  // if(count>0)
  // {

  //   document.title=`count ${count}`;
  // }
  // else{
  //   document.title='count'
  // }

  // },[count]) //this is a  dependency list that is used to control out useEffect when the useEffect can be render

  //   return (

  //     <div>

  // <h1>{count}</h1>
  // <button onClick={()=>countIn(count+1)}>increment</button>
  //     </div>
  //   )

  // cleanup fucniton

  const [size, resize] = useState(window.screen.width);

  useEffect(() => {
    window.addEventListener("resize", wind);

    return ()=>{


       window.removeEventListener("resize", wind);
    }
  });

  function wind() {
    resize(window.innerWidth);
  }

  // window.addEventListener("resize", updte);

  return (
    <>
      <h2>{size} px</h2>
    </>
  );
}
