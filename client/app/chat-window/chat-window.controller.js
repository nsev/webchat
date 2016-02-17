angular.module('webchat').controller('ChatWindowController', ['UserService', 'SocketService', '$scope', function(UserService, SocketService, $scope){
  var vm = this;
  vm.messages = [];

  vm.sendMessage = function(msg){
    var user = UserService.getUsername();
    if(msg != null){
      SocketService.emit('chat message', { 
        message: msg,
        sender: user
      });
    }

    vm.message = null;
  };

  SocketService.on('chat message', function(msg) {
    console.log(msg);
    $scope.$apply(function(){
      vm.messages.push(msg);
    });
    console.log(vm.messages);

  });
}]);