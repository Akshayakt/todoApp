todoApp.controller('todoController',function ($scope,getLocalStorage){

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
	$scope.changeTodo= function () {
		this.todo.completed= !this.todo.completed;
		$scope.completed = _.where($scope.todosList, {completed: true}).length;
	}

	// $scope.completed = 0;
	$scope.removeTodo=function (todo) {
			var i=$scope.todosList.indexOf(todo);
			$scope.todosList.splice(i,1);
			getLocalStorage.updateTodos($scope.todosList);
		};
	
});
