angular.module('ionos.common.CommonService',[]).factory('CommonService', ['$http','$q','testUrl','baseUrl',function($http, $q, testUrl, baseUrl){
  
    return {
      getAllQuestions : function(){
        var url = 'https://cdn.rawgit.com/santosh-suresh/39e58e451d724574f3cb/raw/784d83b460d6c0150e338c34713f3a1c2371e20a/assignment.json';
          return $http.get(url);
      }

    };
    
}]);