angular.module('mezusService', [])

	// super simple service
	// each function returns a promise object
	.factory('Song', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/todos');
			},
			add : function() {
				return $http.post('/api/add');
			},
			delete : function(id) {
				return $http.delete('/api/todos/' + id);
			}
		}
	}]);
