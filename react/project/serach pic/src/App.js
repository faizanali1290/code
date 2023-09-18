import './App.css';
import { Title} from './components/Card'
import Natural from './components/Natural'
import Cars from './components/Cars'
import Navbar from './components/Navbar'




let fav=(v)=>{
console.log(v())
return v()

}
const Fil=()=>{
if(fav=='natural')
{

  return <Natural/>
}
else if(fav=='car'){
  
  return <Cars/>
  
  }
  else{
    return(<>
      <Natural/>
      <Cars/>
    </>)
  }
  
}

function App() {


  
  return (

    <>
<Navbar val={fav}/>
      <Title />

      <Fil/>

      {/* {fav=='natural'?<Natural/>:<Cars/>} */}





</>
      )
}
export default App;
