angular.module('webchat').controller('UserController', ['UserService', '$state', function(UserService, $state){
  var vm = this;

  vm.storeUsername = function(username){
    UserService.storeUsername(username);
    $state.go('chat');
  };
}]);