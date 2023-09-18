import './App.css';
import { memo, useCallback, useState } from 'react';
import Children from './Childtodo';

function App() {
  const [state, upstate] = useState(1)
  const [todo, settodo] = useState([])



  const fun = useCallback(() => {

    settodo((prev) => [...prev, 'state'])

    
  },[todo])



  return (
    <div >

      <button onClick={() => upstate(state + 1)}>increase</button>
      <h1>{state}</h1>
      <Children state={todo} addtodo={fun} />
    </div>
  );
}

export default App;
