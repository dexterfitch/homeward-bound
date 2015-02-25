homewardBound.factory('AnimalsFactory', function AnimalsFactory() {
  var factory = {};
  factory.animals = [{ name: "Augie", species: "Cat", breed: "Tuxedo", color: "Black/White, Bellydragger", age: "5", adopted: false }];

  factory.addAnimal = function() {
    var animal = { name: factory.petName, species: factory.petSpecies, breed: factory.petBreed, color: factory.petColor, age: factory.petAge, adopted: false };
    factory.animals.push(animal);
    factory.petName = null;
    factory.petSpecies = "";
    factory.petBreed = null;
    factory.petColor = null;
    factory.petAge = null;
  };

  factory.deleteAnimal = function(animal) {
    var index = factory.animals.indexOf(animal);
    factory.animals.splice(index, 1);
  };

  return factory;
});

// species: factory.petSpecies, breed: factory.petBreed, color: factory.petColor, age: factory.petAge,

// species: "Dog", breed: "Beagle", age: "2",
