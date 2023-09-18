import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'


function User() {
  const { name, } = useParams()
  const [state, updstate] = useState(+name)


  // const {name, lname} = useParams()

  return (
    <div>
      <ul>
        <li> <NavLink to='/'>Home</NavLink> </li>
        <li> <NavLink to='/about'>About</NavLink> </li>
        <li> <NavLink to='/user/1'>user</NavLink> </li>
        {/* <li> <NavLink to='/user/faizan/ali'>user</NavLink> </li> */}


      </ul>
      <h1>user page </h1>
      <h1>{state}</h1>
      <button onClick={() => updstate(state + 1)}>button</button>

      {/* <h1>{name}{lname}</h1> */}
    </div>
  )
}

export default User
