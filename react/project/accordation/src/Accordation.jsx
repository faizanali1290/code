import userInfo from './Api';
import { useState } from 'react'


// function Accordation() {
//     const [state, toogle] = useState(false)

//     function toogle1() {

//         toogle(() => !state)

//     }
//     return (
//         <>
//             <div>
//                 <h1>Where can I ask questions online for free?",</h1>
//                 <button onClick={() => toogle1()}>{state ? '+' : '-'}</button>
//                 <p>  {

//                     state ? 'nswerbag. You can find answers to various questions from different categories on Answerbag You may ask questions on any topic but will need to register to do so' : ''
//                 }</p>

//             </div>
//             <div>
//                 <h1>Is there a website to ask questions?</h1>
//                 <button onClick={() => toogle1()}>{state ? '+' : '-'}</button>
//                 <p> {
//                     state ? ' Quora is perhaps one of the best and most popular free websites where you can ask questions to get answers from a sizable community of users' : ''
//                 }</p>
//             </div>


//         </>
//     )
// }

// export default Accordation


import React from 'react'

const Accordation = () => {

    const [data, setData] = useState(null)

    const [istoogle, setistoogle] = useState(false)

    const handler = (i) => {

        setistoogle(() => !istoogle)
        setData(i)




    }
    return (
        <div>

            {
                userInfo.map((ele, i) => {

                    return (<>

                        <div key={ele.id}>
                        
                            <h1>{ele.question}</h1>

                            <button onClick={() => handler(i)}>

                                {
                                    data === i && istoogle ? '-' : '+'
                                }

                            </button>
                            <p>
                                {data === i && (


                                    istoogle ? ele.answer : ''

                                )}

                            </p>
                        </div>


                    </>)
                })
            }

        </div>
    )
}

export default Accordation
