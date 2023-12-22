const express = require('express');
const usersRouter = require('./users/users-router');
const server = express();

server.use(express.json());
server.use('/api/users', usersRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
