import React from 'react'
import { NavLink } from 'react-router-dom'

function About() {
  return (
    <div>
      <ul>
                <li> <NavLink to='/'>HOme</NavLink> </li>
                <li> <NavLink to='/about'>About</NavLink> </li>

                <li> <NavLink to='/user/1'>user</NavLink> </li>
                {/* <li> <NavLink to='/user/faizan/ali'>user</NavLink> </li> */}


            </ul>
            <h1>Contact us page</h1>
    </div>
  )
}

export default About
