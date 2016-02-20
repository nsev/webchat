angular.module('webchat').factory('UserService', ['$state', 'SocketService', function ($state, SocketService) {
  var UserService = {};

  var user = {
    name: null,
    settings: {
      dnd : false
    }
  };

  SocketService.on('disconnected', function(){
    return UserService.getUsername();
  });

  UserService.init = function () {
    if (user.name == null) {
      $state.go('user');
    }
  };

  UserService.storeUsername = function (username) {
    user.name = username;
    SocketService.emit('store user', {
      username: username
    });
  };

  UserService.updateSetting = function(setting, value){
    user.settings[setting] = value;
  };

  UserService.getUser = function(){
    return user;
  };

  UserService.getUsername = function () {
    if (user.name == null) {
      UserService.init();
    }

    return user.name;
  };

  return UserService;
}]);
