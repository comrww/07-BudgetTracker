angular.module("todoListApp", [])
.controller('mainCtrl', function($scope) {
	$scope.helloWorld = function() {
		console.log("Hello There");
	};	

	$scope.todos = [];

	$scope.addTask = function() {
		$scope.todos.push({
			description: $scope.tasks.description, 
			priority: $scope.tasks.priority
		});
	
	};

	$scope.expenses = [];

	$scope.addExpense = function() {
		$scope.expenses.push({
			description: $scope.eitem.description, 
			priority: $scope.eitem.priority
		});
	};
});

//Change the color of the list items by injecting html
//look into javascript and angular filters to get the other thing working. 
//Javascript objects on 




//'use strict';

//angular.module('todoListApp', [])
//.controller('mainCtrl', function($scope, dataService) {
//	$scope.addTodo = function() {
//		var todo = {name: "This is a new todo."};
//		$scope.todos.push(todo);
//	};
//
//	$scope.helloWorld = dataService.helloWorld;
//
//	dataService.getTodos(function(response) { 
//		console.log(response.data);
//		$scope.todos = response.data;
//	});
//
//	$scope.deleteTodo = function(todo, $index) {
//		dataService.deleteTodo(todo);
//		$scope.todos.splice($index, 1);
//	};
//
//	$scope.saveTodo = function(todo) {
//		dataService.saveTodo(todo);
//	};
//
//
//});