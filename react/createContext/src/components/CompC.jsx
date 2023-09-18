import React from 'react'
import { FristName, LastName } from '../App'

function CompC() {

    console.log(FristName)
    return (


        <>

            <FristName.Consumer>

                {
                    (frisname) => {


                        return (
                            <>

                                <LastName.Consumer>

                                    {
                                        (lastName) => {

                                            return <h1 > my name is {frisname} {lastName}</h1>

                                        }
                                    }
                                </LastName.Consumer>


                            </>


                        )
                        return <h1>My name is {frisname}</h1>
                    }
                }

            </FristName.Consumer>

        </>

    )
}

export default CompC
