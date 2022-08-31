function crearObjeto(nombre, edad, dni, direccion, signo) {
  const apellido = "Algo";
  const objeto = {
    nombre,
    apellido,
    edad,
    dni,
    direccion,
    signo,
  };

  // cosas con el objeto

  return objeto;
}

const miObjeto = crearObjeto("Josias", "Nores", 20);
console.log(miObjeto);
