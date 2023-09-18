import React from 'react'

function Navbar(props) {
  function v() {

    const val = document.getElementById('value').value
    return val

  }
  return (
    <div className='navbar'>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>constact us</li>
      </ul>
      <div className="serach">
        <input type="text" id='value' value={value} />
        <button onClick={() => props.val(v)}>serach here</button>
      </div>
    </div>
  )
  {

  }

}

export default Navbar
