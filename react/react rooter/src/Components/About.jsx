
import React from 'react'
import { Link } from 'react-router-dom'

function About() {
    return (
        <>
            
            <ul>

                <li> <a href="/"></a><Link to='/'>Home</Link></li>
                {/* <li><Link to='/about'>About</Link></li> */}
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contactus'>contact us</Link></li>
            </ul>
            <section><h1>about us</h1></section>
        </>
    )
}

export default About
