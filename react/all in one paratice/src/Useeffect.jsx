import { cleanup } from '@testing-library/react'
import React, { useEffect } from 'react'
import { useState } from 'react'




const Useeffect = () => {
    const da = new Date().toLocaleTimeString()
    const [time, updatetime] = useState(da)
const hours=new Date().getDate()

    useEffect(() => {

        const t = setInterval(funme, 1000)

        function funme() {
            const f = new Date().toLocaleTimeString()

            updatetime(f)
        }

        return (() => {

            clearInterval(t)
        })


    })


  
    














    return (
        <div>
            <button onClick={() => console.log('here')}>here</button>
            <h1>{time} {hours >= 24? 'PM' : 'AM'}</h1>

        </div>
    )
}

export default Useeffect
