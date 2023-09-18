import './App.css';
import React, { useReducer } from 'react';
import { act } from 'react-dom/test-utils';
// const initial=0

function App() {
  const [state, dispatch] = useReducer(Reducer, 9)//here 9 is initial value like usestate(0)

  //use reducer is similar to useState it allow for coustom state logic
  function Reducer(state, action) {//here action the dispatch data can be store and the state the inital value can be store

    if (action.type === 'inctement') {
      return state + 1
    }
    else if (action.type === 'decrement') {

      return state - 1
    }


  }



  return (
    <>
      <p>{state}</p>

      <button onClick={() => dispatch({ type: "inctement" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>

    </>
  );
}

export default App;
