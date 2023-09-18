import { useEffect, useState } from "react";
import io from "socket.io-client";
import "./index.css";

function App() {
  const socket = io("http://localhost:3000/");
  useEffect(() => {
    // console.log(socket);
    return () => {
      socket.disconnect();
    };
  }, []);

  const [value, setValue] = useState("");

  const sendMessage = () => {
    socket.emit("message", value);
  };

socket.on('message',(message)=>{

  console.log(message)
})


  return (
    <>
      <ul>
        <li>{value}</li>
      </ul>

      <div className="App">
        <input
          type="text"
          placeholder="Enter your message"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={sendMessage}>Send Message</button>
      </div>
    </>
  );
}

export default App;
