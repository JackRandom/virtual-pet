const fido = new Pet('Fido');
const rex = new Pet('Rex');

const pet = {};

// pet.name = 'Fido';



function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = 10;

  
}

Pet.prototype.growUp = function() {
  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
};

Pet.prototype.walkPet = function() {
// if fitness is less than max fitness then add 4 to fitness unless it goes beyond 10 then set it equal to max fitness levele
const maxFitnessLevel = 10;
const walkFitness = 4;
this.fitness += walkFitness;
  if(this.fitness > maxFitnessLevel) this.fitness = maxFitnessLevel

  return this.fitness;
};
module.exports = Pet;