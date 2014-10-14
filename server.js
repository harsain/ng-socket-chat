/**
 * Created by harsain on 12/10/2014.
 */
var express = require('express'),
    app = express(),
    http= require('http').createServer(app),
    io = require('socket.io').listen(http);

http.listen(3000);

app.use(express.static(__dirname+'/public'));
//app.use(express.static(__dirname+'/bower_components'));


io.sockets.on('connection', function(socket){
   socket.on('send msg', function(data){
       io.sockets.emit('get msg', data);
   });
});

http.on('listening', function() {
    console.log('Express server started on port %s at %s', http.address().port, http.address().address);
});