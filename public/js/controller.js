
var myApp = angular.module('myApp',['ui.router']);

myApp.controller('myCtrl',function($scope,$http){
  });

myApp.controller('employeeRecords',function($scope,$http){

  $scope.allRecords=function(){
    $http({
        method : "GET",
        url : "/employee"
    }).then(function mySucces(response) {
        $scope.employeeData=response.data;
        console.log(response.data);
    }, function myError(response) {
        console.log(response.data);
    });
}
  $scope.allRecords();

    $scope.deleteRecord  = function(id)
    {
      $http({
            method : "GET",
            url    : "/deleteRecord/"+id,
        }).then(function mySucces(response) {
          console.log(response);
          $scope.allRecords();
        }, function myError(response) {
            $scope.myWelcome = response.statusText;
            console.log("Error"+response);
        });
    }


    $scope.findEmployee  = function(id)
    {
      $http({
            method : "GET",
            url    : "/findEmployeeRecord/"+id,
        }).then(function mySucces(response) {
          console.log(response);
          $scope.emp = response.data;
          $scope.name = response.data.name;
          $scope.email = response.data.email;
          $scope.number = response.data.mobile;
          $scope.address = response.data.address;
          $scope.designation = response.data.designation;
        }, function myError(response) {

            $scope.myWelcome = response.statusText;
            console.log("Error"+response);
        });
    }

    $scope.update  = function(id)
    {
      $http({
            method : "POST",
            url : "/updateRecord",
            data:{id:id,name:$scope.name,email:$scope.email,mobile:$scope.number,address:$scope.address,designation:$scope.designation}
        }).then(function mySucces(response) {
            console.log(response);
            $scope.allRecords();
            $scope.successUpdate=true;
            angular.element(document.querySelector('#editRecord')).modal('hide')
        }, function myError(response) {
            $scope.myWelcome = response.statusText;
            console.log("Error"+response);
        });
    }

});

myApp.controller('addRecords', function ($scope,$http) {


  $scope.addRecord = function()
  {
    $http({
          method : "POST",
          url : "/addNewRecord",
          data:{name:$scope.name,email:$scope.email,mobile:$scope.number,address:$scope.address,designation:$scope.designation}
      }).then(function mySucces(response) {
          console.log("in Success"+response);
          $scope.successMsg=true;
          $scope.name = "";
          $scope.email = "";
          $scope.number = "";
          $scope.address = "";
          $scope.designation = "";
      }, function myError(response) {
          $scope.myWelcome = response.statusText;
          console.log("Error"+response);
      });
  }


});
