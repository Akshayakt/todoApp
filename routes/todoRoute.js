 
 todoApp.config(function ($routeProvider) {
		$routeProvider
			.when('/addtodo',{
				templateUrl:  './views/partials/todo.html',
				controller: 'todoController'
			})
			.when('/todolist',{
				templateUrl:  './views/partials/todolist.html',
				controller: 'todosController'
			})
			.otherwise({
        		redirectTo: '/index.html'
      		});
});
 