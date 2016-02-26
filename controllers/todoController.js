todoApp.controller('todoController',function ($scope,getLocalStorage, $state,$stateParams,$filter){

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
		$state.go('catg', {}, {reload: true});
	};

	$scope.changeTodo= function () {
		this.todo.completed= !this.todo.completed;
		getLocalStorage.updateTodos($scope.todosList);
	}

	$scope.removeTodo=function (todo) {
			var i=$scope.todosList.indexOf(todo);
			$scope.todosList.splice(i,1);
			var j=$scope.list.indexOf(todo);
			$scope.list.splice(j,1);
			getLocalStorage.updateTodos($scope.todosList);
		};

	$scope.list = _.where($scope.todosList, {todoCatg:$stateParams.key});

	$scope.$watch('list', function () {
        $scope.remainingCount = $filter('filter')($scope.list, { completed: false }).length;
         $scope.completedCount = $scope.list.length - $scope.remainingCount;
     }, true);
});
	