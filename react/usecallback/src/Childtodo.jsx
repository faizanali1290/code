import React,{memo} from 'react'

const Childtodo = ({ state, addtodo }) => {

    console.log('child render')
    return (
        <div>
            {
                state.map((e, i) => {
                    return <p key={i}> entry {i} </p>


                })

            }
            <button onClick={addtodo}>add todo</button>

        </div>



    )
}

export default memo(Childtodo)
