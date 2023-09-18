import { createContext } from 'react';
import './App.css';
import CompA from './components/CompA'


const FristName = createContext()
const LastName = createContext()


function App() {


  return (
    <>

      <FristName.Provider value={'faizan'}>
        <LastName.Provider value={'ali'}>
            <CompA />
        </LastName.Provider>
      </FristName.Provider>

    </>
  );
}
export {FristName,LastName}
export default App;
