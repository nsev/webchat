angular.module('webchat', ['ui.router','webchat.tpl']);
angular.module('webchat.tpl', []);


angular.module('webchat').run(['UserService','VisibilityService','NotificationService', function(UserService, VisibilityService, NotificationService){
  UserService.init();
  VisibilityService.init();
  NotificationService.init();
}]);