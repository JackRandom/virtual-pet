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
describe('feedPet', () => {
  it('calling feedPet should decrease the Pets hunger level by 3', () => {
    const pet = new Pet('Rex');
    pet.hunger = 3;

    expect(pet.feedPet()).toEqual(0);

    });
});

describe('feedPet', () => {
  it('calling feedPet should decrease the Pets hunger level by 3', () => {
    const pet = new Pet('Rex');
    pet.hunger = 0;

    expect(pet.feedPet()).toEqual(0);

    });
});

describe('checkUp', () => {
  it('calling checkup should return I need a walk if the pets fitness is 3 or less,', () => {
    const pet = new Pet('Rex');
    pet.fitness = 3;
   

    expect(pet.checkUp()).toEqual('I need a walk');

    });
});

describe('checkUp', () => {
  it('calling checkup should return I am hungry if the pets hunger is 5 or less,', () => {
    const pet = new Pet('Rex');
    pet.hunger = 5;
   
    expect(pet.checkUp()).toEqual('I am hungry');

    });
});

describe('checkUp', () => {
  it('calling checkUp should return I am hungry AND I need a walk the pets hunger is 5 or less and the fitness is 3 or less,', () => {
    const pet = new Pet('Rex');
    pet.hunger = 5;
    pet.fitness = 3;
    

    expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
    });
});

describe('checkUp', () => {
  it('calling checkUp should return I feel great! if pets hunger is less than 5 and the fitness more than 3,', () => {
    const pet = new Pet('Rex');
    pet.hunger = 4;
    pet.fitness = 5;
    

    expect(pet.checkUp()).toEqual('I feel great!');
    
    });
});

describe('checkUp', () => {
  it('calling checkup should return I am hungry if the pets hunger is 5 or less,', () => {
    const pet = new Pet('Rex');
    pet.hunger = 4;
   

    expect(pet.checkUp()).toEqual('I feel great!');

    });
});

describe('checks that will see if the pet is dead or alive', () => {
  it('fitness below 0 results in death', () => {
      const pet = new Pet('Fido');
      pet.fitness = -1;
      expect(pet.isAlive).toEqual(false);
  })
  it('hunger above 10 results in death', () => {
      const pet = new Pet('Fido');
      pet.hunger = 11;
      expect(pet.isAlive).toEqual(false);
  })
  it('age greater than or equal to 30 results in death', () => {
      const pet = new Pet('Fido');
      pet.age = 30;
      expect(pet.isAlive).toEqual(false);
  })
});

describe('isAlive', () => {
  it('checks to see if the pet is alive if under 30', () => {
    const pet = new Pet('Rex');
    this.age = 29;
    expect(pet.isAlive).toEqual(true);
    })

  it('checks to see if the pet is alive if hunger is less than 10', () => {
      const pet = new Pet('Rex');
      this.hunger = 9;
      expect(pet.isAlive).toEqual(true);
      })

  it('checks to see if the pet is alive if fitness is over 0', () => {
        const pet = new Pet('Rex');
        this.fitness = 7;
        expect(pet.isAlive).toEqual(true);
        })
});

describe('feedPet', () => {

  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido');

    pet.age = 30;

    expect(() => pet.feedPet()).toThrow('Your pet is no longer alive :(');
    })
  });

  describe('walkPet', () => {

    it('throws an error if the pet is not alive', () => {
      const pet = new Pet('Fido');
  
      pet.fitness = 0;
  
      expect(() => pet.walkPet()).toThrow('Your pet is no longer alive :(');
      })
    });

    describe('growUp', () => {

      it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
    
        pet.hunger = 11;
    
        expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
        })
      });
  
      describe('checkUp', () => {

        it('throws an error if the pet is not alive', () => {
          const pet = new Pet('Fido');
      
          pet.hunger = 11;
      
          expect(() => pet.checkUp()).toThrow('Your pet is dead :(');
          })
        });
describe('having a Baby', () => {

          it('instantiate a new Pet from inside the haveBaby method', () => {
            const pet = new Pet('Dad');
            pet.haveBaby('Kid');

            expect(pet.children[0]).toHaveProperty('name', 'Kid')
            })

            it('instantiate a multiple Pets from inside the haveBaby method', () => {
              const pet = new Pet('Dad');
              pet.haveBaby('Kid');
              pet.haveBaby('otherKid');
  
              expect(pet.children[0]).toHaveProperty('name', 'Kid')
              expect(pet.children[1]).toHaveProperty('name', 'otherKid')
              })
          });