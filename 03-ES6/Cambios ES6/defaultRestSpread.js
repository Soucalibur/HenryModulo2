const sumar = (a = 15, b = 10) => {
  const suma = a + b;
  return suma;
};

console.log(sumar(50, 80));

const miArray = [1, 2, 3];

const miArray2 = [...miArray];

miArray2.push(4);

console.log(miArray);
console.log(miArray2);

const miObjeto = { a: "a", b: "b" };

const miObjeto2 = { ...miObjeto, c: "c", a: "otra cosa" };

// aca cambio mi objeto1

console.log(miObjeto2);

function f(x, y, z, otro) {
  return x + y + z + otro;
}

f(...[1, 2, 3, 6]);

console.log(...[1, 2, 3]);
