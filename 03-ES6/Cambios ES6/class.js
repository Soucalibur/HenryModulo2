// function Persona(nombre, apellido, edad) {
//   this.nombre = nombre;
//   this.apellido = apellido;
//   this.edad = edad;
// }
//   Persona.prototype.getNombre = function () {
//     console.log(this.nombre);
//   };

class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
  getNombre() {
    console.log(this.nombre);
  }
}

const jorge = new Persona("Jorge", "Vega", 20);

console.log(jorge);
jorge.getNombre();

class Empleado extends Persona {
  constructor(nombre, apellido, edad, sector) {
    super(nombre, apellido, edad);
    this.sector = sector;
  }
}
const empleado1 = new Empleado("Jorge", "Vega", 20, "Learning");
console.log(empleado1);
empleado1.getNombre();
