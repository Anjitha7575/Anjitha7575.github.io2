angular.module('ionos.common.AdminController',[]).controller('AdminController', function($scope, $rootScope, $stateParams, $state, $filter, CommonService) {
    
    $scope.getAllQuestions = function(){
		CommonService.getAllQuestions().then(function(response){
			$scope.allQuestions= response.data;
			angular.forEach($scope.allQuestions, function(obj){
				obj.qAnswered = null;
			});
			$scope.totalItems = $scope.allQuestions.length;
			$scope.currentPage = 1;
			$scope.changeQuestion();

		});
	}

	$scope.changeQuestion = function(){
			$scope.$watch('currentPage + itemsPerPage', function () {
                var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
                   end = begin + $scope.itemsPerPage;
                $scope.filteredQuestions = $scope.allQuestions.slice(begin, end);
             });
	}


    $scope.isAnswered = function (ao, index) {
        $scope.allQuestions[index-1].qAnswered = ao.key;
        $scope.currentPage +=1;
        $scope.changeQuestion();
        if($scope.currentPage > $scope.totalItems){
        	$scope.reportTest();
        }
    };
	
	$scope.reportTest =function(){
		var score = 0;
		angular.forEach($scope.allQuestions,function(obj){
			if(obj.qAnswered === obj.answer){
				score +=1;
			}
		});
		return 100*(score/$scope.totalItems);
	}

	function init(){
			$scope.itemsPerPage = 1;
			$scope.alphaOptions = [{label:"A",key:0},{label:"B",key:1},{label:"C",key:2},{label:"D",key:3}];
	}

	$scope.getAllQuestions();

	init();


	

    



  })
	
