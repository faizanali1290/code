import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { wait } from '@testing-library/user-event/dist/utils';

function App() {


  const [val, newval] = useState(1)
  const [na, api] = useState()
  const [move, moveapi] = useState()


  useEffect(() => {

    (async () => {

      let f = await axios.get(`https://pokeapi.co/api/v2/pokemon/${val}`)
      api(f.data.name)
      moveapi(f.data.moves.length)
      console.log(f)

    }
    )()

  })
  const getvalue = (e) => {

    newval(e.target.value)



  }
  return (
    <>
      <h1>
        you select the  value <span style={{ color: 'yellow' }}>{val}</span>
      </h1>
      <h1>
        the name is : <span style={{ color: 'red' }}>{na} </span>     </h1>
      <h1>the move name length is : <span style={{ color: 'green' }}>{move}</span></h1>

      <select name="" id="" value={val} onChange={getvalue}>

        <option value="1">1</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="25">25</option>

      </select>


    </>



  )
}

export default App;
