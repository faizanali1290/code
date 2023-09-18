import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import reportWebVitals from './reportWebVitals';

const root =ReactDOM.createRoot(document.getElementById('root'))


 


  // let tieme= new Date().toTimeString()
  
  
  let date=new Date().toDateString()
  let tieme= new Date().toTimeString()

root.render(
<>

<h1>my name is faizan</h1>
<p>Date is : {date} </p>
<p>Time is : {tieme}
  


</p>

</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
