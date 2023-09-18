import React from 'react'
import { sum, sub, multi } from './Calcu'

function App() {
  return (
    
    <>
    <li>the sum of number is : {sum(33, 55)}</li>
    <li>the substraction of number is : {sub(33, 55)}</li>
    <li>the multiplication of number is :{multi(55, 3)}</li>
  </>
  )
}

export default App
