import React from 'react'
import Liftingchild from './liftingchild'
const liftiningparent = () => {
    function fun(a) {
        console.log('hello ' + a)
    }



    return (
        <div>



            <button id='parentside'>parent</button>
            <Liftingchild p={fun}  />

        </div>
    )
}

export default liftiningparent
