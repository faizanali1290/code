import './App.css';
import React, { useState } from 'react';


function App() {

  const [realtimeformvalue, updaetvalue] = useState('')
  const [data, updatedata] = useState([])

  // const [toogle, updatetoggle] = useState(false)





  const render = () => {


    if (realtimeformvalue === '') {

      alert('plase enter a value')
    }
    else {

      // updatedata([...data, realtimeformvalue])
      updatedata([...data, { value: realtimeformvalue, isComplete: false }])
      updaetvalue('')

    }



  }
  function clear() {

    updatedata([])
  }
  const formvalue = (event) => {

    updaetvalue(event.target.value)

  }



  const completedCheck = (index) => {


    const newtodos = [...data];

    newtodos[index].isComplete = !newtodos[index].isComplete
    updatedata(newtodos)
  }


  return (


    <>

      <form action='submit' onSubmit={(e) => { e.preventDefault() }} >

        <input style={{ border: 'none', borderBottom: '3px solid black', outline: 'none' }} type="text" onChange={formvalue} value={realtimeformvalue} />
        {/* <input style={{ borderRadius: '40px', padding: "0px 13px", margin: '0px 4px', position: 'relative', top: '14px' }} type="button" onClick={render} value="+" /> */}
        <button
          type='submit'
          onClick={render}
          style={{ borderRadius: '40px', padding: "0px 13px", margin: '0px 4px', position: 'relative', top: '14px' }}>Acdd</button>
        <input style={{ borderRadius: '40px', padding: "0px 13px", margin: '0 4px', position: 'relative', top: '14px' }} type="button" onClick={clear} value="clear" />
      </form>



      {

        data.map((iteratevalue, index) => {


          function remove() {


         


          return (

            <>

              <ul>
                <li key={index + 1} style={{ textDecoration: iteratevalue.isComplete ? 'line-through' : "" }}>{iteratevalue.value}</li>

                <button key={index + 2} onClick={remove}>Delete</button>
                <button key={index + 3} onClick={() => completedCheck(index)}>Done</button>

              </ul>
            </>
          )
        })
      }
    </>
  );
}

export default App;
