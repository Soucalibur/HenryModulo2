const { createStore } = require('redux');
const contador = require('./reducer');
const { incremento, decremento, incrementoImpar} = require('./actions');

// En esta linea creamos nuestro store. Pasandole como parametro nuestro Reducer
var store = createStore(contador)

// Obtenemos el elemento con el id `valor`.
var valor = document.getElementById("valor")

// Esta funcion nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  
  // Seteamos el numero obtenido como texto dentro del elemento con id 'valor':
  
  const state = store.getState().contador;

  valor.textContent = state;

 

}

// Ejecutamos la funcion 'renderContador':

renderContador();

// Nos subscribimos al store pasandole la misma funcion. Asi cada vez que llegue una accion, ejecutamos la funcion:

store.subscribe(renderContador)

//////////
const clickMas = ()=>{
  store.dispatch(incremento())
}
const clickMenos = () =>{
  renderContador(decremento)
}
//////////
// Por ultimo, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la accion correspondiente:

let botonIncremento = document.getElementById("incremento")
  botonIncremento.addEventListener("click",()=>{
    store.dispatch(incremento())
  } )

let botonDecremento = document.getElementById("decremento")
  botonDecremento.addEventListener("click", ()=>{
    store.dispatch(decremento())
  })

let botonIncrementoImpar = document.getElementById("incrementoImpar")
  botonIncrementoImpar.addEventListener("click",()=>{
    store.dispatch(incrementoImpar())
  })

let botonAsync = document.getElementById("incrementoAsync")
  botonAsync.addEventListener("click",()=>{
    setTimeout(() => {
      store.dispatch(incremento())
    }, 1000);
  })
