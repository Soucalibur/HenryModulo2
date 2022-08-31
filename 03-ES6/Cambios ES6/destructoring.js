const miArray = [1, 2, 3, "Palabra", { a: "s" }];

// const num1 = arr[0];
// const num2 = arr[1];
// const num3 = arr[2];
// const num4 = arr[3];
// const palabra = arr[4];
// const booleano = arr[5];

const [num1, num2, num3, palabra, booleano] = miArray;
// const num1 = arr[0];
// const num2 = arr[1];
// const num3 = arr[2];

console.log(num1);
console.log(num2);
console.log(num3);
console.log(palabra);
console.log(booleano);

const miObjeto = {
  nombre: "Jorge",
  apellido: "Vega",
  edad: 20,
};

const { edad, nombre } = miObjeto;

console.log(nombre);
console.log(edad);
