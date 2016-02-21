var express = require('express');
var lodash = require('lodash');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var webroot = 'www';
var public = webroot;

var users = [];
var messages = [];

function buildMessageHistoryForClient(timeRangeInMillis){
  return lodash.filter(messages, function(message){
    var cutoff = Date.now();
    return message.sentTimeStamp >= cutoff - timeRangeInMillis;
  });
}

function buildUserListForClient(){
  return lodash.map(lodash.cloneDeep(users), function(user){
    delete user['socket'];
    return user;
  });
}

app.use(express.static(public));

app.get('/', function (req, res) {
  res.sendFile('/index.html', { 'root': webroot });
});

io.on('connection', function (socket) {

  socket.on('chat message', function (msg) {
    msg.sentTimeStamp = Date.now();
    messages.push(msg);
    io.emit('chat message', msg);
  });

  socket.on('store user', function (user) {
    user.socket = socket.id;
    users.push(user);
    io.emit('user joined', buildUserListForClient());
    io.to(socket.id).emit('chat history', buildMessageHistoryForClient(3600000));
  });

  socket.on('disconnect', function () {
    users = lodash.reject(users, { 'socket': socket.id});
    io.emit('user left', buildUserListForClient());
  });
});

http.listen(3000, function () {
  console.log('listening on *:3000');
});
