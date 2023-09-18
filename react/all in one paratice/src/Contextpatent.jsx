import React, { createContext } from 'react'
import Contextchild1 from './Contextchild1'
const Fname = createContext()
const Lname = createContext()

const Contextpatent = () => {
    return (
        <div>
            <Fname.Provider value='faizan'>
                <Lname.Provider value='ali'>
                    <Contextchild1 />

                </Lname.Provider>

            </Fname.Provider>
        </div>
    )
}
export { Fname, Lname }
export default Contextpatent
