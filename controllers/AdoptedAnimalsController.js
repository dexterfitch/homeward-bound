homewardBound.controller("AdoptedAnimalsCtrl", function AdoptedAnimalsCtrl($scope, AnimalsFactory) {
  $scope.animals = AnimalsFactory.animals;
});
