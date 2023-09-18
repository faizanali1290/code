import React from 'react'

import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>

            <ul>

                <li> <a href="/"></a><Link to='/home'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contactus'>contact us</Link></li>
            </ul>
            <section> <h1>Home page</h1></section>
        </div>



    )
}

export default Home
