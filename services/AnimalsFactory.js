homewardBound.factory('AnimalsFactory', function AnimalsFactory() {
  var factory = {};
  factory.animals = [{name: "Jimbo", adopted: false }];

  factory.addAnimal = function() {
    var animal = { name: factory.petName, adopted: false };
    factory.animals.push(animal);
    factory.petName = null;
    // factory.petSpecies = null;
    // factory.petBreed = null;
    // factory.petAge = null;
  };

  factory.deleteAnimal = function(animal) {
    var index = factory.animals.indexOf(animal);
    factory.animals.splice(index, 1);
  };

  return factory;
});

// , species: factory.petSpecies, breed: factory.petBreed, age: factory.petAge,

// species: "Dog", breed: "Beagle", age: "2", 
