
import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import axios from "axios";
import Header from "./components/header";
import "./App.css";
import MessageForm from "./components/MessageForm";

function App() {
  const SERVER_IP = "http://localhost:5000";
  const socketRef = useRef(null);
  const reconnectIntervalRef = useRef(null);
  const [reconnectingFailed, setReconnectingFailed] = useState(false);

  const connectSocket = () => {
    socketRef.current = io(SERVER_IP, { forceNew: true });

    socketRef.current.on("connect", () => {
      console.log("User connected to the backend");
      clearInterval(reconnectIntervalRef.current);
      reconnectIntervalRef.current = null;
      setReconnectingFailed(false);
    });

    socketRef.current.on("disconnect", (reason) => {
      console.log("Disconnected from server. Reason:", reason);

      // Start the manual reconnect loop
      if (!reconnectIntervalRef.current) {
        let retryCount = 0;
        const maxRetries = 5;

        reconnectIntervalRef.current = setInterval(() => {
          if (retryCount >= maxRetries) {
            console.log(
              "Reconnecting attempts exceeded. Stopping reconnection..."
            );
            clearInterval(reconnectIntervalRef.current);
            reconnectIntervalRef.current = null;
            setReconnectingFailed(true);
            socketRef.current.disconnect();
            return;
          }

          if (!socketRef.current?.connected && !socketRef.current?.connecting) {
            console.log("Reconnecting...");
            socketRef.current.connect();
            retryCount++;
          }
        }, 2000);
      }
    });

    socketRef.current.on("reconnect", (attemptNumber) => {
      console.log(`Reconnected to server after attempt #${attemptNumber}`);
    });

    socketRef.current.on("reconnect_error", (error) => {
      console.error("Failed to reconnect:", error);
    });

    socketRef.current.on("message", (message) => {
      console.log("Received message:", message);
    });
  };

  useEffect(() => {
    connectSocket();

    // Cleanup function
    return () => {
      if (reconnectIntervalRef.current) {
        clearInterval(reconnectIntervalRef.current);
        reconnectIntervalRef.current = null;
      }

      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, []);

  const postUser = async () => {
    const data = {
      name: "faizan",
      age: "20",
      country: "pakistan",
    };

    try {
      const response = await axios.post(`${SERVER_IP}/`, { data });
      console.log(response.data);
    } catch (error) {
      console.error("Error while making POST request:", error);
    }
  };

  return (
    <div className="outside">
      <div className="side"></div>
      {/* <button onClick={postUser}>Post User</button> */}
      {/* {reconnectingFailed && <p>Reconnecting failed</p>} */}
      <div className="">
        <Header></Header>
        <MessageForm />
      </div>
      <div className="side"></div>{" "}
    </div>
  );
}

export default App;



import React, { useEffect } from "react";
import io from "socket.io-client";
import axios from "axios";

function App() {
  useEffect(() => {
    const socket = io("http://localhost:5000", {
      withCredentials: true, // Enable CORS credentials if needed (e.g., cookies, authentication headers)
    });

    socket.on("connect", () => {
      console.log("Connected to server");

      socket.on("message", (message) => {
        console.log("Received message:", message);
      });

      // You can emit any event here or handle other socket events
      socket.emit("message", "Hello, server!");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    // Clean up the socket connection on unmount (optional)
    return () => {
      socket.disconnect();
    };
  }, []);

  const postUser = async () => {
    const data = {
      name: "faizan",
      age: "20",
      country: "pakistan",
    };

    try {
      const response = await axios.post("http://localhost:5000/", { data });
      console.log(response.data);
    } catch (error) {
      console.error("Error while making POST request:", error);
    }
  };

  return (
    <div>
      <button onClick={postUser}>post user</button>
      {/* The rest of your component */}
    </div>
  );
}

export default App;


seEffect(() => {
  socket;
  // const socket = io("http://localhost:5000", {
  //   withCredentials: true, // Enable CORS credentials if needed (e.g., cookies, authentication headers)
  // });

  socket.on("connect", () => {
    console.log("Connected to server");

    socket.on("message", (message) => {
      console.log("Received message:", message);
    });

    // You can emit any event here or handle other socket events
    socket.emit("message", "Hello, server!");
  });

  socket.on("disconnect", () => {
    console.log("Disconnected from server");
  });

  // Clean up the socket connection on unmount (optional)
  return () => {
    socket.disconnect();
  };
}, []);