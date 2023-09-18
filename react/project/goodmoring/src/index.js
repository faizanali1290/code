import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

let date = new Date()
date = date.getHours()
let style = {}

let greeting = ""

if (date >= 1 && date <= 11) {


  greeting = " Good Morining "

  style.color = "green"

}
else if (date <= 12 & date >= 7) {

  greeting = " After Noon"
  style.color = "yellow"

}

else {


  greeting = ' Good Night'
  style.color = "gray"
}
ReactDOM.render(<>



  <h1>Hello Sir <span style={style}>{greeting}</span></h1></>







  , document.getElementById("root"))