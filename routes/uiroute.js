todoApp.config(function($stateProvider, $urlRouterProvider){
      
      $urlRouterProvider.otherwise("/todoList")
      
      $stateProvider
        .state('todoList', {
            url: "/todoList",
            templateUrl: "./views/partials/todolist.html",
            controller:'todoController'
        })
        .state('todoList.catg',{
          url: "/:key",
          templateUrl:"./views/partials/catgList.html",
           controller:'catgListController',
            resolve:{            
              catgList: function(catglistSrv,$stateParams){
               var catg=catglistSrv.getCatgs($stateParams.key); 
              return catg;
            }
           }
         
        })
    });