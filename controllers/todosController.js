

todoApp.controller('todosController',function ($scope,getLocalStorage){

	$scope.todosList=getLocalStorage.getTodos();
	
});


