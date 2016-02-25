todoApp.config(function($stateProvider, $urlRouterProvider){
      
      $urlRouterProvider.otherwise("/index.html")
      
      $stateProvider
        // .state('todoList', {
        //     url: "/todoList",
        //     templateUrl: "./views/partials/todolist.html",
        //     controller:'todoController'
        // })
        .state('todoList.catg',{
          url: "/:key",
          templateUrl:"./views/partials/catgList.html",
          controller:'todoController'
        })
    });