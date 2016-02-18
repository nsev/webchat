//https://stackoverflow.com/questions/2271156/chrome-desktop-notification-example
angular.module('webchat').factory('NotificationService', ['VisibilityService', function (VisibilityService) {
  var NotificationService = {};

  NotificationService.init = function () {
    if (!Notification) {

    }
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  };

  NotificationService.showDesktopNotification = function (title, iconPath, body) {
    if (VisibilityService.isHidden()) {
      var notification = new Notification(title, {
        icon: iconPath,
        body: body,
      });

      notification.onclick = function () {
        notification.close();
      };
    }
  };


  return NotificationService;
}]);
