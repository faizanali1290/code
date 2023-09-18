import React from 'react'
import { NavLink } from 'react-router-dom'
function Contact() {
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

<section>Contact page</section>
        </div>

    
    )
}

export default Contact
