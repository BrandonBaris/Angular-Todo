angular
  .module('TodoApp')
  // dependency injection
  .service('TodoService', ['$http', function($http){
    
    this.list = function () {
      return $http.get('/api'); // return promise

    };
    // POST /api creates a new todo
    this.create = function ( todo ){
      //returns a promise
      return $http.post('/api', todo);
    };

      // PUT /api/:id/complete updates a new todo
    this.completed = function ( todo ){
      //returns a promise
      return $http.put('/api/' + todo + '/complete');
    };

      // PUT /api/:id/incomplete updates a new todo
    this.incomplete = function ( todo ){
      //returns a promise
      return $http.put('/api/' + todo + '/incomplete');
    };

    // DELETE /api/:id destroys a todo
    this.delete = function ( todo_id ){
      return $http.delete('/api/' + todo_id); //returns a promise
    };
  }]);