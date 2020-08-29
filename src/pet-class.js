const maxFitnessLevel = 10;
const walkFitness = 4;
const minimumHungerLevel = 0;
const addFood = 3;
const deathAge = 30;
const deathHunger = 10;
const deathFitness = 0;

class Pet {
    constructor (name){
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = 10;
  this.children = [];
}


get isAlive() {
    return this.age < deathAge && this.hunger < deathHunger && this.fitness > deathFitness;
  }


growUp() {
  if (!this.isAlive) {
    throw new Error('Your pet is no longer alive :(');
  }
  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
};

walkPet() {
// if fitness is less than max fitness then add 4 to fitness unless it goes beyond 10 then set it equal to max fitness level
if (!this.isAlive) {
  throw new Error('Your pet is no longer alive :(');
}
this.fitness += walkFitness;
  if(this.fitness > maxFitnessLevel) this.fitness = maxFitnessLevel

  return this.fitness;
};

feedPet() {
  // removes 3 from hunger unless hunger is at 0 in which case it sets hunger to 0
  if (!this.isAlive) {
    throw new Error('Your pet is no longer alive :(');
  }
  this.hunger -= addFood;
    if(this.hunger < minimumHungerLevel) this.hunger = minimumHungerLevel
  
    return this.hunger;
  };
  
checkUp() {
    // check pet's stats and returns messages based on those stats
    if (!this.isAlive) {
      throw new Error('Your pet is dead :(');
    }

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

    haveBaby (createBaby) {
      // creates a new child from the parent Pet
      const child = new Pet (createBaby);
      this.children.push(child);
      return child;
      };
    };
    module.exports = Pet;