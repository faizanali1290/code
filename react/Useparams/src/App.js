import './App.css';

import Home from './Home';
import About from './About';
import User from './User';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return <BrowserRouter>


    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/user/:name' element={<User />} />
      {/* <Route path='/user/:name/:lname' element={<User />} /> */}

      {/* this can be access user/dynamicname1/dynamicname2 */}

    </Routes>

  </BrowserRouter>


}

export default App;
