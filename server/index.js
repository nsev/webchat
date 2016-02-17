var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var webroot = 'www';
var public = webroot;

app.use(express.static(public));

app.get('/', function (req, res) {
  res.sendFile('/index.html', {'root': webroot});
});

io.on('connection', function (socket) {
  console.log('a user connected');
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3000, function () {
  console.log('listening on *:3000');
});
