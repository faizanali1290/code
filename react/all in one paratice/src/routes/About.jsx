import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


const About = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li> <NavLink to={'/'} >Home</NavLink> </li>
                    <li> <NavLink to={'/about'} >about</NavLink> </li>
                </ul>
            </nav>

            this is aout page

            <li> <NavLink to={'nest'}>hii</NavLink> </li>
            <Outlet></Outlet>



        </div>
    )
}

export default About
