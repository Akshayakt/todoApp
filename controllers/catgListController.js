todoApp.controller('catgListController',function ($scope,getLocalStorage){

	$scope.todosList=getLocalStorage.getTodos();

	
	
});
