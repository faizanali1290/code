import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const Port = 5000;
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  },
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors("*"));

app.post("/", (req, resp) => {
  console.log(req.body);
  resp.send("nice");
});

app.get("/", (req, res) => {
  console.log("hello");
  res.send("Hello, World!");
});
const messages = []; // Maintain the messages array outside the event handler

io.on("connection", (socket) => {
  console.log("User connected");
  socket.join("user_room");

  socket.on("user_message", (message) => {
    messages.push(message); // Accumulate messages in the array
    socket.to("user_room").emit(
      "message",
      messages.map((msg, index) => ({ id: index, text: msg }))
    );
  });

  socket.on("disconnect", (reason) => {
    console.log("Disconnected. Reason:", reason);
  });

  socket.on("reconnect", (attemptNumber) => {
    console.log(`Reconnected to server after attempt #${attemptNumber}`);
  });

  socket.on("reconnect_error", (error) => {
    console.error("Failed to reconnect:", error);
  });
});

server.listen(Port, () => {
  console.log(`Server listening on port ${Port}`);
});
