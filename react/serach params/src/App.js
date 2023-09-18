import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
function App() {

  const [urlvalue, seturl] = useSearchParams()
  let valu = urlvalue.get('page')
  console.log(valu)
  const [value, setvalue] = useState(1)

  function next() {
    seturl({ page: +valu + 1 })


    setvalue((e) => e + 1)
  }
  function prev() {
    seturl({ page: +valu - 1 })
    setvalue((e) => e - 1)

  }


 
  return (
    <>
      <ul>
        <li>
          <NavLink to={'/'}> home</NavLink>

        </li>
        <li>
          <NavLink to={`/user?page=${+value}`}> user</NavLink>

        </li>

      </ul>

      <h1>{value}</h1>

      <button onClick={prev}>prev</button>
      <button onClick={next}>Next</button>
<div>


{
  useEffect(() => {


if (valu ==='2') {
document.body.style.background='orange'

}
else if(valu==='3'){
  document.body.style.background='green'

}
else if(valu==='4'){
  document.body.style.background='yellow'

}
else if(valu==='5'){
  document.body.style.background='gray'

}

else if(valu>5){
  document.body.style.background='red'
  
}
else if(valu<0){
  document.body.style.background='white'
  
}
 

})
}
</div>

    </>
  )
}

export default App
