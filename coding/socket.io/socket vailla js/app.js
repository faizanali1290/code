import express from "express";
import { Server } from "socket.io";
import http from "http";
import path from "path";
import { fileURLToPath } from "url";
const app = express();
const server = http.createServer(app);
const io = new Server(server);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "")));
app.get("/", (req, resp) => {
  resp.sendFile(path.join(__dirname, "index.html"));
});
//! check how much user is visted

//!check user is connected
const connectedUsers = {};
//? woring on socket

var clients = [];
io.on("connection", (socket) => {
  console.log("user connected");

  socket.on("user_live", (user) => {
    socket.user = user;
    connectedUsers[socket.id] = user;
    io.emit("connectedUsers", Object.keys(connectedUsers).length);
  });
  // getVister();

  socket.on("disconnect", () => {
    delete connectedUsers[socket.id];
    io.emit("connectedUsers", Object.keys(connectedUsers).length);
    console.log("userDIsconned");
  });
});

const port = 9000; 
// 127.0.0.1:9000
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// ?what is emit
// socket.io, the emit method is used to send custom events from the client to the server or from the server to the client.
