angular.module('mezusController', [])

	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope','$http','Song', function($scope, $http, Song) {
		$scope.formData = {};
		$scope.loading = false;

		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos
		/*Todos.get()
			.success(function(data) {
				$scope.todos = data;
				$scope.loading = false;
			});
*/
		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.addSong = function() {
    console.log("hello from addSong");
			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			//if ($scope.formData.text != undefined) {
				$scope.loading = true;
       console.log("hello from deep1");
				// call the create function from our service (returns a promise object)
				Song.add()

				 .success(function(data){
					 $scope.loading = false;
					 console.log("ehllo from deep2")
					 $scope.songs = data;
				 })
			//}
		};

		// DELETE ==================================================================
		// delete a todo after checking it
	/*	$scope.deleteTodo = function(id) {
			$scope.loading = true;

			Todos.delete(id)
				// if successful creation, call our get function to get all the new todos
				.success(function(data) {
					$scope.loading = false;
					$scope.todos = data; // assign our new list of todos
				});
		};*/
	}]);
