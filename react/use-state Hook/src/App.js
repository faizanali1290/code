import './App.css';
import React, {useState} from "react"

export default function App() {
  
  const touppercase=()=>{

let newtext=text.toUpperCase()
setText(newtext)
    // console.log(newtext)

  }
  const changevalue=(event)=>{

   setText( event.target.value)


// alert('om chamge')

  }
  const [text,setText]=useState('enter text here');
  // setText=('faizan')
  // setText('hii faizan text is set')
  return (
    

    <div>
   
    <div className="form-floating">
        <textarea  onChange={changevalue} className="form-control mt-3 " value={text} placeholder="Leave a comment here" id="floatingTextarea"></textarea>

      </div>

      <button onClick={touppercase} type="button ms-5" className="btn btn-primary mt-5">
        ToUpperCase
      </button>
    </div>


   
  );


}


