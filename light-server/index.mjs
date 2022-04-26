import { Server } from 'socket.io'

const io = new Server({
  cors: {
    origin: "*"
  }
});

io.on("connection", (socket) => {
  console.log('connection')
  socket.on('action', (data) => {
    console.log('action', data)
  })
});


io.listen(3131);