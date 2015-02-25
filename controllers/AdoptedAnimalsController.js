homewardBound.controller('AdoptedAnimalsCtrl', function AdoptedAnimalsCtrl($scope, AnimalsFactory) {
  $scope.animals = AnimalsFactory.animals;
  $scope.addAnimalToAdoptedList = function(animal) {
    animal.adopted = true;
  };
});
