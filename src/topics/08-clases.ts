export class Person {
  public name: string;
  private address: string;

  constructor() {
    this.name = "Lizeth";
    this.address = "Medellín";
  }
}

const ironman = new Person();
console.log(ironman);

//el constructor es un metodo especial de una clase, es el primer metodo que se va llamar cuando se crea la instancio de una clase
