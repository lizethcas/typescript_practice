export class Person {
  /* public name: string;
  private address: string; */

  constructor(public name: string, private address: string = "No Address") {}
}

const ironman = new Person("Lizeth", "Medellín");
console.log(ironman);

//el constructor es un metodo especial de una clase, es el primer metodo que se va llamar cuando se crea la instancio de una clase
//inyeccion de despendencias se inicia en el constructor en angular