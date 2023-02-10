export class Animal {
  constructor(public name: string) {}

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

export class Dog extends Animal {

  constructor(
    name: string, // we MUST to pass the property from its parent, not use access keyword
    public owner: string
  ) {
    super(name); // this send the property name to the new class, this works with line16
  }

  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('woof!');
    }
  }
}

const ramses = new Animal('ramses');
ramses.move();
console.log(ramses.greeting());

const colitas = new Dog('colitas', 'salo');
colitas.move();
console.log(colitas.greeting());
colitas.woof(5);
console.log(colitas.owner, 'is my owner');
