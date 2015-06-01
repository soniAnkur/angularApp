/**
 * Created by ankursoni on 29-05-2015.
 */
angular.module("app.services").factory("masterService",["$http",function($http){
    var url = "http://railpnrapi.com/test/check_pnr/pnr/1234567890/forrmat/json/pbapikey/ea4485cf0725ad5cedbe05d705e3f98c/pbapisign/c17d2ff9c8e0ad8a578ce39ab199655095416e4f";

    var getStatus = function(){
        return $http.get("/getData",{headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
             'Content-Type': 'application/json'
        }}).then(function(data, status, headers, config) {
            alert(data);
            return data;
        });

    };

    return{
        getStatus : getStatus
    };

}]);
