import React, { useState } from 'react'
import { NavLink, useParams, useSearchParams } from 'react-router-dom'

const UseParams = () => {
    const [state, setstate] = useState('1000 to 50000')
    const [f, c] = useState()
    const [geturl, seturl] = useSearchParams()
    const { id } = useParams()

    console.log(id)

    // console.log(pa)
    const checkbox = () => {

        let a = 1

        if (false) {
            a = 0
            seturl({ name: "faizan" })



        }
        else {
            a = 1
            seturl({ name: "ali" })
        }

    }



    // console.log()
    return (

        <>
            <NavLink to={`/page`}>serach here</NavLink>
            <label htmlFor="fil">1000 to 50000</label>
            <input id='fil' type="checkbox" onClick={checkbox} />
            {/* <div id='f'>fa</div> */}

            <NavLink to={'/name/1'}>f</NavLink>
            {/* <h1>{f}</h1> */}

        </>
    )
}


export default UseParams
