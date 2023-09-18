import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contactus from './components/Contactus';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Company from './components/Company';
import Other from './components/Other';
function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contactus' element={<Contactus></Contactus>}>


          <Route path='company' element={<Company />}></Route>
          <Route path='support' element={<Other />}></Route>
          {/* <Route path='company' element={<h1>plase contact us company</h1>}></Route>
          <Route path='support' element={<h1>plase contact us coustomer suport</h1>}></Route> */}

        </Route>


      </Routes>





    </BrowserRouter>
  );
}

export default App;
