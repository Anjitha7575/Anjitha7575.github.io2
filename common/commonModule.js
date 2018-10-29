angular.module('ionos.common',['ionos.common.AdminController','ionos.common.ViewController','ionos.common.CommonService']);


	
angular.module('ionos.common').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    
	$urlRouterProvider.otherwise('/quiz');
    
    $stateProvider
      .state('quiz', {
        url : '/quiz',
        templateUrl : 'common/partials/quiz.html',
        controller : 'AdminController'
      })
  }]);

