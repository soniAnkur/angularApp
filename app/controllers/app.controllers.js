angular.module("app.controllers").controller("mainController",["$scope","masterService",function($scope,masterService){
    $scope.applicationName="application name";

    var complete = function(data){
        $scope.resp = data;
    };
    $scope.getData = function(){
        return masterService.getStatus().then(complete);
    };
}]);