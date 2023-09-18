import '../App.css'
import React, { useEffect, useState } from 'react'

function Toodolist() {
    let [currentvalue, updatevalue] = useState('')
    const [iseditbutton, setisedit] = useState(true)
    const [isedit, setedit] = useState(null)


    // get localStorage data


    const localStorageItem = () => {

        const todo = localStorage.getItem('todo')
        if (todo) {

            return JSON.parse(todo)
        }
        else {
            return []
        }


    }

    

    const [store, soredata] = useState(localStorageItem())

    const formvalue = (event) => {
        updatevalue(event.target.value)

    }

    // addtodo  

    const addTodo = (event) => {
        event.preventDefault();

        if (currentvalue == '') {
            alert('plase enter a value')
        }
        // insert edit todo
        else if (!iseditbutton) {
            let z = store.map((ele, i) => {
                if (i === isedit) {
                    return { ...ele, value: currentvalue };
                }
                return ele;
            });
            soredata(z);
            setisedit(true);
            updatevalue('');
        }
        // add todo
        else {
            soredata([...store, { value: currentvalue, iscomplete: false }]);
            updatevalue('');
        }
    };

    // remove all todo

    function removetodo(e) {
        e.preventDefault()
        soredata([])



    }

    // remove element
    const removeElement = (index) => {
        soredata((store) => {
            return store.filter((e, i) => {
                return index != i


            })


        })


        // localStorage.removeItem()


    }

    // edit element

    const edit = (i) => {



        const value = store[i];


        updatevalue(value.value)
        setedit(i)
        setisedit(false)

    }

    // localStorage


    useEffect(() => {


        localStorage.setItem('todo', JSON.stringify(store))

    }, [store])



    return (
        <>
            <form action="">

                <input type="text" value={currentvalue} onChange={formvalue} />
                {iseditbutton ? <button onClick={addTodo}>+</button> : <button onClick={addTodo}>edit</button>}
                <button onClick={removetodo}>-</button>



            </form>


            {

                store.map((elemnt, index) => {

                    const workdone = () => {


                        const element = [...store]

                        element[index].iscomplete = !element[index].iscomplete
                        soredata(element)


                    }
                    return (
                        <>
                            <div>
                                <p style={{ textDecoration: elemnt.iscomplete ? "line-through" : "" }}>{elemnt.value}</p>
                                <button onClick={() => removeElement(index)}>X</button>
                                <button onClick={workdone}>?</button>
                                <button onClick={() => edit(index)} >edit</button>
                            </div>
                        </>
                    )





                })
            }
        </>
    );




}
export default Toodolist