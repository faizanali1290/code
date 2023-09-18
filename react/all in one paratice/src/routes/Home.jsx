import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Route, Routes, useParams, useNavigate } from 'react-router-dom'

const Home = () => {
    const { name } = useParams()
    const [state, upstate] = useState('serach here')
    const [url, update] = useState()
    function fun(r) {
        upstate(r.target.value)
    }

    const serach = () => {
        update(state)
    }
    // console.log(c)
    return (
        <div>
            <nav>
                <ul>
                    <li> <NavLink to={'/'} >Home</NavLink> </li>
                    <li> <NavLink to={'/about'} >about</NavLink> </li>
                    <li>  <NavLink to={`/faizan/1`}>us</NavLink> </li>
                </ul>
                <input type="text" name="" onChange={fun} value={state} id="" />
                <NavLink to={`/faizan/${state}`} >  <button onClick={serach}>serach</button></NavLink>
            </nav>

            <section>
                this is home page
                <h1>{name} sa</h1>
                <p>{state}</p>

            </section>
        </div>
    )
}

export default Home
