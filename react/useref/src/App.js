
import { useEffect, useRef, useState } from 'react';
function App() {

  const [s, update] = useState(1)
  const para = useRef(1)
  const f = useRef(1)
  useEffect(() => {
    if (para) {
      para.current.style.backgroundColor = 'red'
      para.current.style.color = 'white'
    }
    f.current = f.current + 1

  })

  return (
    <>
  

      <p ref={para}>hello </p>
      {/* <h2>{s}</h2> */}
      <button onClick={() => update((e) => e + 1)}>onClick</button>
      <p>{f.current}</p>
    </>


  );
}

export default App;
