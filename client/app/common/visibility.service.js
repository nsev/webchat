//https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API
angular.module('webchat').factory('VisibilityService', ['$document', function ($document) {
  var VisibilityService = {};

  var hidden, visibilityChange;

  function toggeHidden(){
    $document[0][hidden] = !$document[hidden];
  }

  VisibilityService.init = function () {
    if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support 
      hidden = "hidden";
      visibilityChange = "visibilitychange";
    } else if (typeof document.mozHidden !== "undefined") {
      hidden = "mozHidden";
      visibilityChange = "mozvisibilitychange";
    } else if (typeof document.msHidden !== "undefined") {
      hidden = "msHidden";
      visibilityChange = "msvisibilitychange";
    } else if (typeof document.webkitHidden !== "undefined") {
      hidden = "webkitHidden";
      visibilityChange = "webkitvisibilitychange";
    }

    $document[0].addEventListener(visibilityChange, toggeHidden, false);
  };

  VisibilityService.isHidden = function(){
    return $document[0][hidden];
  };


  return VisibilityService;
}]);
