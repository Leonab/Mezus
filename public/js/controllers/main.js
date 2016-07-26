angular.module('mezusController', [])

	// inject the Song service factory into our controller
	.controller('mainController', ['$scope','$http','Song', function($scope, $http, Song) {
		$scope.formData = {};
		$scope.loading = false;

		// GET =====================================================================
		/*Todos.get()
			.success(function(data) {
				$scope.todos = data;
				$scope.loading = false;
			});
*/
		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.addSong = function() {
			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			//if ($scope.formData.text != undefined) {
				$scope.loading = true;
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
	/*	$scope.deleteSong = function(id) {
			$scope.loading = true;

			Todos.delete(id)
				.success(function(data) {
					$scope.loading = false;
					$scope.todos = data; // assign our new list of todos
				});
		};*/
	}]);
