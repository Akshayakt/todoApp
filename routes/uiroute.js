todoApp.config(function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise("/index.html")
      $stateProvider
        .state('todoList',{
          url:"/todoList"      
        })
        .state('catg',{
          url: "/:key",
          templateUrl:"./views/partials/catgList.html",
          controller:'todoController'
        })
    });