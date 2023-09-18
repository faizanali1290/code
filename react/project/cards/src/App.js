import './App.css';
import { Card, Title, } from './components/Card'
import Sarray from './components/Sarray'
function App() {
  // console.log(Sarrayfrom)
  return (

    <>

      <Title />
      <h1 className='method'>frist method</h1>

      <div className="cards">
        <Card CardImg="../pic/56.jpg" />
        <Card CardImg="../pic/58.jpg" />
        <Card CardImg="../pic/70.jpg" />
        <Card CardImg="../pic/58.jpg" />
        <Card CardImg="../pic/img8.jpg" />


      </div>






      <h1 className='method'>      second method
      </h1>



      <div className="cards">
        <Card CardImg={Sarray[0].CardImg} />
        <Card CardImg={Sarray[1].CardImg} />
        <Card CardImg={Sarray[2].CardImg} />
        <Card CardImg={Sarray[3].CardImg} />
      </div>





      <h1  className='method'>third method</h1>


      {/* third method */}

      <div className="cards">

        {Sarray.map((va) => {
          return (


            <Card CardImg={va.CardImg} key={va.id}
 />
          )

        })}

    </div>
      </>
      )
}

export default App;
