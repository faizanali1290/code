import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return <BrowserRouter>

    <Routes>
      <Route path='/home' element={<div>Home page</div>} >


      </Route>
      <Route path='/about' element={<div>ABout page</div>}></Route>
      <Route path='/services' element={<div>Services page</div>}></Route>
      <Route path='/contact us'></Route>
      <Route path='/*' element={<div>page not found</div>}></Route> 
      {/* this method is  used to if and page not exit then it show */}
    </Routes>

  </BrowserRouter>
}

export default App
