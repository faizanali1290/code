import React from 'react'
import { FristName, LastName } from '../App'
import { useContext } from 'react'



function CompC() {

    const fname = useContext(FristName)
    const lname = useContext(LastName)
    return (
        <div>
            <h1>my name is {fname} {lname} </h1>
        </div>
    )
}

export default CompC
