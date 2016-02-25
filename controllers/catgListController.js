todoApp.controller('catgListController',function ($scope,getLocalStorage){

	$scope.todosList=getLocalStorage.getTodos();
	$scope.list = _.where($scope.todosList, {completed: true}).length;
});
