import logo from './logo.svg';
import React from 'react';
import { useHistory } from 'react-router-dom'; // version 5.2.0
import './App.css';

function App() {

  let history = useHistory();
  const handleClick = () => {
    history.push('./pages/MyComponent');
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Next page</button>
    </div>
  );
}



export default App;
