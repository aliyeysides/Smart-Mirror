angular.module('smartMirror', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'app/src/mainView.html'
      })
  }])

  .directive('smTimeWidget', ['$interval', function($interval){
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'app/src/widgets/_timeWidget.html',
      link: function(scope, ele, attr){

      	scope.date = _returnCurrentTime();

      	// 1 sec refresh rate
      	$interval(function(){
      		scope.date = _returnCurrentTime();
      	}, 1000);

      }

    }

	  function _returnCurrentTime(){
	  	return moment().format('MMMM Do YYYY, h:mm a');
	  }
  }])
