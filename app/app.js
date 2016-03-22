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

      	// 1 sec refresh rate
      	$interval(function(){
      		scope.date = _refreshTime();
      	}, 1000);

      	scope.date = moment().format('LTS');

      	scope.$watch('date', function(newVal, oldVal){
      		if (newVal){
      			_refreshTime();
      		}
      	})

      }

    }

	  function _refreshTime(){
	  	return moment().format('LTS');
	  }
  }])
