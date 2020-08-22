

function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = 10;
  // this.isAlive = true;
  
}
Pet.prototype = {
  get isAlive() {
    return this.age < 30 && this.hunger < 10 && this.fitness > 0;
  }
};

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
  
  Pet.prototype.checkUp = function() {
    // check pet's stats and returns messages based on those stats
var status = '';
    if (this.hunger >= 5 && this.fitness <= 3) {
       return 'I am hungry AND I need a walk';
    }

    if (this.fitness <= 3) {
    return 'I need a walk';
    }
    
    if (this.hunger >= 5) {
    return 'I am hungry';
    }

    else {
      return 'I feel great!';
    }

    };

    Pet.prototype.isPetAlive = function() {
      // if the pets age, hunger and fitness are above or below certain values the pet is alive
      if (this.age < 30 && this.hunger < 10 && this.fitness > 0){
      return true; 
    }

   else{
     return false;
    }

    };

module.exports = Pet;