import React from 'react'
import { NavLink } from 'react-router-dom'
function Home() {
    return (
        <div>

            <ul>
                <li> <NavLink to='/'>HOme</NavLink> </li>
                <li> <NavLink to='/about'>About</NavLink> </li>
                <li> <NavLink to='/user/1'>user</NavLink> </li>
                {/* <li> <NavLink to='/user/faizan/ali'>user</NavLink> </li> */}

            </ul>
            <h1>Home page</h1>
        </div>
    )
}

export default Home
