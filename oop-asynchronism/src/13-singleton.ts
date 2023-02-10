export class MyService {

  static instance: MyService | null = null;

  private constructor(private name: string) {}

  getName() {
    return this.name;
  }

  static create(name: string) {
    if (MyService.instance === null) {
      console.log('debería entrar una vez');
      MyService.instance = new MyService(name); // we can use the constructor inside the class
    }
    return MyService.instance;
  }
}

const myService1 = MyService.create('service 1');
console.log(myService1.getName());
const myService2 = MyService.create('service 2');
console.log(myService2.getName());
const myService3 = MyService.create('service 3');
console.log(myService3.getName());

console.log(myService1 === myService2);

/*
  Output

  ❯ npx ts-node src/13-singleton.ts
  debería entrar una vez
  service 1
  service 1
  service 1
  true
*/
