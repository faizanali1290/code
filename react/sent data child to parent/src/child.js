import React from "react"



import { useState } from "react"
export default function Child(p) {
    const [va, up] = useState(false)


    // let name='faizan'


    return (
        <>


        //here we can set data from child to parent using arrow
            {/* <button onClick={()=>p.parentdata()}>click me</button> */}
            <p>{va}</p>
            <button onClick={() => p.parentdata(up)}> click iawfeosdhio me</button>
        </>

    )
}
