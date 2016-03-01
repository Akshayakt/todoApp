

todoApp.controller('todosController',function ($scope,getLocalStorage,$stateParams){

	$scope.todosList=getLocalStorage.getTodos();
	console.log($stateParams);
	
});


