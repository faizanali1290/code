// import React from "react"
import { Fname, Lname } from './Contextpatent'

import { useContext } from "react"


const Contextchild = () => {

    // const fname = useContext(Fname)
    // const lname = useContext(Lname)

    return (
        <div>
            {/* <h1>hello from conetent child {fname + " " + lname} </h1> */}
            <Fname.Consumer>{(f) => {


                return <Lname.Consumer>
                    {
                        (l) => {
                            return <h1>{f}  {l}</h1>
                        }
                    }
                </Lname.Consumer>


            }}</Fname.Consumer>

        </div>
    )
}

export default Contextchild
