import React, { useState } from 'react'
import './App.css'

function App() {


  const [d_none, d_block] = useState(false)
  return (
    <>

      <nav>
        <div className="haumbargar " onClick={() => d_block(!d_none)} >
          <div ></div>
          <div></div>
          <div></div>

        </div>
        <div className="log">CODER_FAIZAN</div>
        <ul className={d_none ? 'block' : ''}>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact us</li>
        </ul>
        <div className={`authenicaltion ${d_none ? 'block' : ''}`}>
          <button>Sinup</button>
          <button>Login</button>

        </div>

      </nav>

      <section>

        <h1>Welcome TO My Frist Navbar On React</h1>

      </section>


    </>
  )
}

export default App
