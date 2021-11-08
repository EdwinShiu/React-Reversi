import { Request, Response } from 'express';
import ioserver, { Socket } from 'socket.io';

const express = require('express');
const cors = require('cors');
const socket = require('socket.io');
const app = express();
const port = 5000;

app.use(cors);

app.get('/', (req: Request, res: Response) => {
  console.log("GET Request on '/'");
  res.json({
    "success": true,
    "data": undefined,
  });
});

const server = app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

const io = socket(server, {
  cors: {
    origin: '*',
  }
});

io.on('connection', (socket: Socket) => {

  console.log('success connect!');

  socket.on('getMessage', (message) => {

    console.log(message);
    socket.emit('getMessage', message);
  })
})