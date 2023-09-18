import '../App.css'
import React, { useState } from 'react'

function Toodolist() {
    let [currentvalue, updatevalue] = useState('')
    const [store, soredata] = useState([])

    const formvalue = (event) => {
        updatevalue(event.target.value)

    }

    const addTodo = (event) => {
        event.preventDefault()

        soredata([...store, { value: currentvalue, iscomplete: false }])
        updatevalue('')
    }
    function removetodo(e) {
        e.preventDefault()
        soredata([])

    }
    const removeElement = (index) => {
        soredata((store) => {
            return store.filter((e, i) => {
                return index != i


            })


        })


    }



    return (
        <>
            <form action="">

                <input type="text" value={currentvalue} onChange={formvalue} />
                <button onClick={addTodo}>+</button>
                <button onClick={removetodo}>-</button>
            </form>


            {

                store.map((elemnt, index) => {

                    const workdone = () => {


                       const element=[...store]

                       element[index].iscomplete=!element[index].iscomplete
                       soredata(element)


                    }
                    return (
                        <>
                            <div>
                                <p style={{ textDecoration: elemnt.iscomplete ? "line-through" : "" }}>{elemnt.value}</p>
                                {/* <button onClick={() => removeElement(elemnt, index)}>X</button> */}
                                <button onClick={() => removeElement(index)}>X</button>
                                <button onClick={workdone}>?</button>

                            </div>
                        </>
                    )





                })
            }
        </>
    );




}
export default Toodolist