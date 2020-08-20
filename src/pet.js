

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

Pet.prototype.feedPet = function() {
  // removes 3 from hunger unless hunger is at 0 in which case it sets hunger to 0
  const minimumHungerLevel = 0;
  const addFood = 3;
  this.hunger -= addFood;
    if(this.hunger < minimumHungerLevel) this.hunger = minimumHungerLevel
  
    return this.hunger;
  };
module.exports = Pet;