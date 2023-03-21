const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

let numUsers = 0;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  numUsers++;
  io.emit("chat message", "User Connected. Total users: " + numUsers);
  
  socket.on('disconnect', () => {
    numUsers--;
    io.emit("chat message", "User disconnected. Total users: " + numUsers);
  });

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});