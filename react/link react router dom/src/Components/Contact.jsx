import React from 'react'
import { Link } from 'react-router-dom'
function Contact() {
    return (
        <>
            <ul>

                <li> <Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contactus'>contact us</Link></li>
            </ul>
            <section><h1>Conatact us</h1></section>
        </>
    )
}

export default Contact
