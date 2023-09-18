import { useState } from 'react';
import './App.css';
import SliderApi from './SliderApi'
function App() {
  const [slide, changelslide] = useState(0)
  const prev = () => {
    if (slide === 0) {

      changelslide(3)

    }
    else {

      changelslide(slide - 1)
    }
  }
  const next = () => {

    if (slide == SliderApi.length - 1) {

      changelslide(0)

    }
    else {

      changelslide(slide + 1)

    }


  }


  return (
    <>

      <img style={{ width: '400px' }} src={SliderApi[slide]} alt="" />
      <button onClick={prev}>next</button>
      <button onClick={next}>prev</button>

    </>
  );
}

export default App;
