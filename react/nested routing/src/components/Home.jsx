import React from 'react'
import { NavLink } from 'react-router-dom'
function Home() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/about'}>About</NavLink>
                </li>
                <li>
                    <NavLink to={'/contactus'}>Contact us</NavLink>
                </li>
            </ul>

<section>Home page</section>
        </div>

    
    )
}

export default Home
