
var todoApp = angular.module('todoApp',['storageService','ngRoute','angular.filter']);
todoApp.controller('todosController',function ($scope,getLocalStorage){

	$scope.todosList=getLocalStorage.getTodos();
	
	$scope.addtodo= function () {
		$scope.todosList.push({
			id:Date.now(),
			text:$scope.newTodo,
			todoCatg:$scope.todoCatg,
			completed:false
		});
		 getLocalStorage.updateTodos($scope.todosList);
		$scope.newTodo="";
		$scope.todoCatg="";
	};
	$scope.removeTodo=function (todo) {
			var i=$scope.todosList.indexOf(todo);
			$scope.todosList.splice(i,1);
			getLocalStorage.updateTodos($scope.todosList);
		};
	
});



