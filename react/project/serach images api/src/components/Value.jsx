import React, {useState } from 'react'
import Api from './Api'
function Value() {


    const [state, updateState] = useState('')


    const inputhandler = (e) => {


        updateState(e.target.value)
    }
    return (
        <div>
            <input type="text" onChange={inputhandler} value={state} />

            {/* {state===''?'':<Api value={state}></Api>} */}
       <Api value={state}></Api>
        </div>

    )
}

export default Value
