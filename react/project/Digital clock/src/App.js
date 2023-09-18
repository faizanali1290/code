import './App.css';
import React,{useEffect, useState} from 'react';
// import React,{useEffect} from 'react';

let time=new Date().toLocaleTimeString()

function App() {


  //frist method
  
  const [state, updatestate]=useState(new Date().toLocaleTimeString())
  
// function updatetime(){
//    time=new Date().toLocaleTimeString()

//   updatestate(time)

// }


useEffect(()=>{

const interval=setInterval(()=>{

   

  updatestate(new Date().toLocaleTimeString())

},1000)

return(()=>{

  clearInterval(interval)
})



},[])










  return (
<>

{/* frist method */}
{/* <h1>{state}</h1>
<button onClick={updatetime}></button> */}


{/* second method */}


<h1>{state}</h1>
</>  );
}

export default App;
