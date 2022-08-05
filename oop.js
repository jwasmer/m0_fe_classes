// Write a class called Unicorn
// it should have a dynamic name property
// it should have a color property, that is silver by default
// it should have a method called "say" that returns whatever string is passed in, with "*~*" at the beginning and end of the string
class Unicorn {

  constructor(name) {
    this.name = name;
    this.color = `silver`;
  }

  say() {
    console.log(`*~*${this.name}*~*`);
  }

}

const sparkles = new Unicorn(`Sparkles`);
sparkles.say();

console.log(sparkles)

// Write a class called Vampire
// it should have a dynamic name property
// it should have a pet property, that is a bat, by default BUT it could be dynamic if info is passed in initially
// it should have a thirsty property, that is true by default
// it should have a drink method. When called, the thirsty property changes to false
class Vampire {

  constructor(name, pet) {
    this.name = name;
    this.pet = pet || `Bat`;
    this.thirsty = true;
  }

  drink() {
    this.thirsty = false;
  }

}

const dracula = new Vampire(`Dracula`, `Wolf`);
dracula.drink();

console.log(dracula);

//  Write a Dragon class
// it should have a dynamic name property (string)
//  it should have a dynamic rider property (string)
//  it should have a dynamic color property (string)
//  it should have a isHungry property that is true by default
//  it should have a eat method. If the dragon eats 4 times, it is no longer hungry
  // HINT: This requires you to use your knowledge from the conditionals lesson
class Dragon {
  constructor(name, rider, color) {
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.isHungry = true;
    this.feeding = 0;
  }

  eat() {
    this.feeding++

    if (this.feeding === 4) {
      this.isHungry = false;
      console.log(this.feeding);
      console.log(`${this.name} the ${this.color} is done feeding.`)
      this.feeding = 0;
    }

  }

}

const drogon = new Dragon(`Drogon`, `Daenerys`, `Black`);

 console.log(drogon);

for (var i = drogon.feeding; i < 4; i++) {
    drogon.eat();
    console.log(drogon.feeding);
}


//  BIG CHALLNEGE: Write a Hobbit class
//  it should have a dynamic name property (string)
//  it should have a dynamic disposition property (string)
//  it should have an age property that defaults to 0
//  it should have a celebrateBirthday method. When called, the age increases by 1
//  it should have an isAdult property (boolean) that is false by default. once a Hobbit is 33, it should be an adult
//  it should have an isOld property that defaults to false. once a Hobbit is 101, it is old.
//  it should have a hasRing property. If the Hobbit's name is "Frodo", true, if not, false.
class Hobbit {
  constructor(name, disposition, age) {
    this.name = name;
    this.disposition = disposition;
    this.age = age || 0;
    this.isAdult = false;
    this.isOld = false;
    this.hasRing = false;
    this.checkAge();
  }
  checkAge() {
    if (this.age >= 33) {
      this.isAdult = true;
    }
    if (this.age >= 101) {
      this.isOld = true;
    }
  }
  celebrateBirthday() {
    this.age++
    this.checkAge();
  }
}

const frodo = new Hobbit(`Frodo`, `Adventurous`, 32);
console.log(frodo);
frodo.celebrateBirthday();
console.log(frodo);

const bilbo = new Hobbit(`Bilbo`, `Adventurous`, 111);
console.log(bilbo);
