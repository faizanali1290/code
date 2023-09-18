import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Contact() {

    const navigate=useNavigate()

    function RedirectHome(){

        navigate('/')
    }
    function back(){

        navigate(-1)
    }

    // go back
    return (
        <>
            <ul>

                <li> <Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contactus'>contact us</Link></li>
            </ul>
            <section><h1>Conatact us</h1></section>


            <button onClick={()=>RedirectHome()}>Go home page</button>
            <button onClick={()=>back()}>go back</button>
        </>
    )
}

export default Contact
