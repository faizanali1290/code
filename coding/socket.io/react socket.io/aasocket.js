// const SERVER_IP = "http://localhost:5000";
// const socketRef = useRef(null);
// const reconnectIntervalRef = useRef(null);
// const [reconnectingFailed, setReconnectingFailed] = useState(false);

// const connectSocket = () => {
//   socketRef.current = io(SERVER_IP, { forceNew: true });

//   socketRef.current.on("connect", () => {
//     console.log("User connected to the backend");
//     clearInterval(reconnectIntervalRef.current);
//     reconnectIntervalRef.current = null;
//     setReconnectingFailed(false);
//   });

//   socketRef.current.on("disconnect", (reason) => {
//     console.log("Disconnected from server. Reason:", reason);

//     // Start the manual reconnect loop
//     if (!reconnectIntervalRef.current) {
//       let retryCount = 0;
//       const maxRetries = 5;

//       reconnectIntervalRef.current = setInterval(() => {
//         if (retryCount >= maxRetries) {
//           console.log(
//             "Reconnecting attempts exceeded. Stopping reconnection..."
//           );
//           clearInterval(reconnectIntervalRef.current);
//           reconnectIntervalRef.current = null;
//           setReconnectingFailed(true);
//           socketRef.current.disconnect();
//           return;
//         }

//         if (!socketRef.current?.connected && !socketRef.current?.connecting) {
//           console.log("Reconnecting...");
//           socketRef.current.connect();
//           retryCount++;
//         }
//       }, 2000);
//     }
//   });

//   socketRef.current.on("reconnect", (attemptNumber) => {
//     console.log(`Reconnected to server after attempt #${attemptNumber}`);
//   });

//   socketRef.current.on("reconnect_error", (error) => {
//     console.error("Failed to reconnect:", error);
//   });

//   socketRef.current.on("message", (message) => {
//     console.log("Received message:", message);
//   });
// };

// useEffect(() => {
//   connectSocket();

//   // Cleanup function
//   return () => {
//     if (reconnectIntervalRef.current) {
//       clearInterval(reconnectIntervalRef.current);
//       reconnectIntervalRef.current = null;
//     }

//     if (socketRef.current) {
//       socketRef.current.disconnect();
//     }
//   };
// }, []);

// import { useEffect } from "react";
// import { io } from "socket.io-client";

// export const socket = io("http://localhost:5000", {
//   autoConnect: false,
//   withCredentials: true,
// });

// import React from 'react'

// const sssockets = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default sockets
