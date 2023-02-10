export class Animal {
  constructor(protected name: string) {} // use protected to give access only from its child

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }

  protected doSomething() { // use protected to give access only from its child
    console.log('grrrr');
  }
}

export class Dog extends Animal {

  constructor(
    name: string,
    public owner: string
  ) {
    super(name);
  }

  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log(`woof! ${this.name}`);
    }
    this.doSomething();
  }

  move() {
    // code
    console.log('moving as a dog'); // create a method to move
    super.move(); // call the move method of its parent
  }
}

const colitas = new Dog('colitas', 'salo');
// colitas.name = 'otro nombre';
colitas.woof(1);
// colitas.doSomething();
colitas.move(); // this will use two methods, 1st from child
                // then from its parent as we can see in lines 35 and 36
