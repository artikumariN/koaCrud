myApp.config(function($stateProvider, $urlRouterProvider)
{
  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html',
      controller:'userController'
    }).state('list', {
      url: '/list',
      templateUrl: 'views/user.html',
      controller :'employeeRecords'
    }).state('add', {
      url: '/add',
      templateUrl: 'views/addEmployeeRecord.html',
      controller :'addRecords'
    })
});
