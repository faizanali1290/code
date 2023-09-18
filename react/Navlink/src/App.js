import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contactus from './components/Contactus';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contactus' element={<Contactus></Contactus>}></Route>
      </Routes>





    </BrowserRouter>
  );
}

export default App;
