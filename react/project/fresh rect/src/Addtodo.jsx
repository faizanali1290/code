import React, { useState } from 'react'
import Rendertodo from './Rendertodo'

const Addtodo = () => {
    const [initvalue, updatevalue] = useState('')
    const [newvalue, rendervalue] = useState([])
    const [edit, editvalue] = useState(null)

    // form value control

    const valuehandler = ((e) => {
        updatevalue(e.target.value)


    })

    // add todo list
    const addtodo = () => {
        if (initvalue == '') {
            alert('plase enter a value')
        }
        else {
            rendervalue([...newvalue, { value: initvalue, iscomplete: false }])
            updatevalue('')
        }



    }


    // remove todo list

    const removetodo = (i) => {
        let items = newvalue.filter((e, index) => {
            return i != index
        })
        rendervalue([...items])


    }
    //remove all todo
    const reomveall = () => {
        rendervalue([])
    }
    //complete todo
    const complete = (e, i) => {

        const alltodo = [...newvalue]
        newvalue[i].iscomplete = !newvalue[i].iscomplete
        rendervalue(alltodo)


    }

    const edittodo = (i) => {

        editvalue(newvalue[i].value)
        // console.log(newvalue[i].value)
    }


    return (
        <div>
            <input type="text" onChange={valuehandler} value={edit != null ? edit : initvalue} />
            <button onClick={addtodo}>add</button>

            <button onClick={reomveall} >remove all</button>
            {

                newvalue.map((e, i) => {
                    return <>

                        <h2 style={{ textDecoration: e.iscomplete ? 'line-through' : "" }}>{e.value} </h2>
                        <button onClick={() => complete(e, i)}>done</button>
                        <button onClick={() => removetodo(i)}>remove</button>
                        <button onClick={() => edittodo(i)}>edit</button>

                    </>

                })


            }
        </div>
    )
}

export default Addtodo
