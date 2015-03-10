angular
  .module('TodoApp',[])

  //dependency injection
  .controller('TodoController', ['$scope', 'TodoService', function($scope,TodoService){
    
    //TodoService.list() returns a promise
    TodoService.list().then(function(response){
      $scope.todos = response.data; 
    });

    $scope.save_todo = function( new_title ){
      $scope.todos.push({
        title : new_title,
        completed : false
      });
      $scope.new_todo = ""; //clear the input
    };
    $scope.enter_saves = function( $event ){
      if( $event.keyCode == 13){ //keyCode for [enter key]
        $scope.save_todo( $scope.new_todo );
      }
    };
  }]);