todoApp.controller('todoController',function ($scope,getLocalStorage,$stateParams,$filter){

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
		getLocalStorage.updateTodos($scope.todosList);
	}


	$scope.removeTodo=function (todo) {
			var i=$scope.todosList.indexOf(todo);
			$scope.todosList.splice(i,1);
			var i=$scope.list.indexOf(todo);
			$scope.list.splice(i,1);
			getLocalStorage.updateTodos($scope.todosList);
		};
	// 	console.log($stateParams.key);
	// $scope.key=$stateParams.key;
	// console.log($scope.key);
	$scope.list = _.where($scope.todosList, {todoCatg:$scope.key});

	$scope.$watch('list', function () {
                 $scope.remainingCount = $filter('filter')($scope.list, { completed: false }).length;
                 $scope.completedCount = $scope.list.length - $scope.remainingCount;
                 }, true);
});
