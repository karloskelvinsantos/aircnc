const express = require("express");
const monsooge = require("mongoose");
const cors = require("cors");
const path = require("path");
const socketio = require("socket.io");
const http = require("http");

const routes = require("./routes");

const app = express();
const server = http.Server(app);
const io = socketio(server);

monsooge.connect(
  "mongodb+srv://mongo:mongo@cluster0-8c45m.mongodb.net/aircnc?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const connectedUsers = {};

io.on('connection', socket => {
  const { user_id } = socket.handshake.query;
  
  console.log(socket.id);
  console.log(user_id);

  connectedUsers[user_id] = socket.id;
});

app.use((request, response, next) => {
  request.io = io;
  request.connectedUsers = connectedUsers;

  console.log(connectedUsers);

  return next();
});

app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

server.listen(3333);
