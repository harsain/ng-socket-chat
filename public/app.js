/**
 * Created by harsain on 13/10/2014.
 */


var app = angular.module('chatApp', []);


app.factory('socket', function(){
    return io.connect('http://192.168.0.8:3000');
});


app.controller('MainCtrl', function($scope, socket){
    $scope.msgs = [];

    $scope.sendMsg = function(){
        socket.emit('send msg', $scope.chat.msg);
        $scope.chat.msg = '';
    };

    socket.on('get msg', function(data){
        console.debug($scope.msgs);
        $scope.msgs.push(data);
        $scope.$digest();
    });
});