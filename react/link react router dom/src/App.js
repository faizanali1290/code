import './App.css';
import Home from './Components/Home'
import About from './Components/About';
import Contactus from './Components/Contact'
import { Routes, Route,BrowserRouter } from 'react-router-dom'

function App() {
  return<> <BrowserRouter>
    

      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/Contactus' element={<Contactus />}></Route>

      </Routes>
  

    </BrowserRouter>
    
    </>
}

export default App;
