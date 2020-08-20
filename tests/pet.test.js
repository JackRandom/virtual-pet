const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
  });

describe('constructor', () => {
 

  it('sets the name property', () => {
    const pet = new Pet('Fido');

    expect(pet.name).toEqual('Fido');
  });
});

describe('constructor', () => {
  

  it('has a initial age of 0', () => {
    const pet = new Pet('Fido');

    expect(pet.age).toEqual(0);
  });
});
describe('growUp', () => {
  it('increments the age by 1', () => {
    const pet = new Pet('Fido');

    pet.growUp();

    expect(pet.age).toEqual(1);
  });
});
describe('growUp hunger', () => {
  it('increments the age by 1 and adds 5 hunger to the pets hunger number', () => {
    const pet = new Pet('Fido');

    pet.growUp();

    expect(pet.hunger).toEqual(5);
  });
});
describe('growUp fitness', () => {
  it('increments the age by 1,adds 5 hunger to the pets hunger number and takes 3 off the pets total fitness', () => {
    const pet = new Pet('Fido');

    pet.growUp();

    expect(pet.fitness).toEqual(7);
    expect(pet.age).toEqual(1);
  });
});
describe('growUp fitness', () => {
  it('increments the age by 1,adds 5 hunger to the pets hunger number and takes 3 off the pets total fitness', () => {
    const pet = new Pet('Fido');
    pet.age = 5
    pet.fitness = 3
    pet.growUp();

    expect(pet.fitness).toEqual(0);
    expect(pet.age).toEqual(6);
  });
});
describe('growUp fitness', () => {
  it('increments the age by 1,adds 5 hunger to the pets hunger number and takes 3 off the pets total fitness', () => {
    const pet = new Pet('Fido');
    pet.age = 6
    pet.fitness = 5
    pet.growUp();

    expect(pet.fitness).toEqual(2);
    expect(pet.age).toEqual(7);
  });
});
describe('walkPet', () => {
  it('calling walkPet should increase the Pets fitness level by 4', () => {
    const pet = new Pet('Fido');
    pet.fitness = 6;
    pet.walkPet();

    expect(pet.fitness).toEqual(10);
  });
});
describe('walkPet', () => {
  it('calling walkPet should increase the Pets fitness level by 4', () => {
    const pet = new Pet('Fido');
    pet.fitness = 1;
    pet.walkPet();

    expect(pet.fitness).toEqual(5);
  });
});
describe('walkPet', () => {
  it('calling walkPet should increase the Pets fitness level by 4', () => {
    const pet = new Pet('Rex');
    pet.fitness = 7;
       pet.walkPet();

    expect(pet.fitness).toEqual(10);

    });
});