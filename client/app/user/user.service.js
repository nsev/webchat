angular.module('webchat').factory('UserService', ['$state', function($state) {
  var UserService = {};

  var user = {
    name : null
  };

  UserService.init = function(){
    if(user.name == null){
      $state.go('user');
    }
  };

  UserService.storeUsername = function(username){
    user.name = username;
  };

  UserService.getUsername = function(){
    if(user.name == null){  
      UserService.init();
    }

    return user.name;
  };

  return UserService;
}]);