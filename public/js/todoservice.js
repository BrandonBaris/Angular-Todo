angular
  .module('TodoApp')
  // dependency injection
  .service('TodoService', ['$http', function($http){
    
    this.list = function () {
      return $http.get('/api'); // return promise

    };

    this.create = function ( todo ){
      //returns a promise
      return $http.post('/api', todo);
    };

  }]);