// function sumar(a, b) {
//   const suma = a + b;
//   return suma;
// }

// const sumar = (a, b) => {
//   const suma = a + b;
//   return suma;
// };

const sumar = (a, b) => {
  return a + b;
};

console.log(sumar(5, 4));

const miArray = [1, 2, 3, 4, true, "Holis"];

miArray.forEach((elemento) => {
  //muchas cosas
  console.log(elemento);
});

const bob = {
  name: "Bob",
  friends: ["Jorge", "Lara", "Lean"],
  printFriends() {
    this.friends.forEach((f) => {
      console.log(this.name + " knows " + f);
    });
  },
};

bob.printFriends();
