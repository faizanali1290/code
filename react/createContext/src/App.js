import './App.css';
import CompA from './components/CompA'
import { createContext } from 'react'

const FristName = createContext()
const LastName = createContext()

function App() {


  return (
    <>

      <FristName.Provider value={'faizan'}>

        <LastName.Provider value={'ALi'}>

          <CompA />  
        </LastName.Provider>
      </FristName.Provider>


    </>
  );
}

export { FristName, LastName };
export default App;
