homewardBound.controller('AvailableAnimalsCtrl', function AvailableAnimalsCtrl($scope, AnimalsFactory) {
  $scope.animals = AnimalsFactory.animals;
  $scope.AnimalsFactory = AnimalsFactory;
});
