export abstract class Animal {
  constructor(protected name: string) {}

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }

  woof(times: number) {
    for (let index = 0; index < times; index++) {
      console.log(`woof! ${this.name}`);
    }
  }
}

// const fifi = new Animal('fifi');
// fifi.move();
// console.log(fifi.greeting());

const cheis = new Dog('cheis', 'Juan');
cheis.move();
console.log(cheis.greeting());
cheis.woof(2);
