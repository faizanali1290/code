import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
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


            <section>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quos unde odit rem ducimus sequi, iure labore. Deserunt quas, assumenda recusandae quo facere libero dicta magnam modi rerum possimus doloremque?</section>

            <p> <NavLink to={'support'}> contact us coustomer support </NavLink> </p>
            <p> <NavLink to={'company'}> contact us company </NavLink> </p>
            <Outlet></Outlet>

        </div>


    )
}

export default Contact
