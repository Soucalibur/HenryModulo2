
Explicaciones

<Provider store> 
dentro de provider tiene store, el cual asi se puede tener acceso a store

    <BrowserRouter>

        <App/>
    </BrowserRouter>

</Provider >

Componentes repaso
El componente recibe props, que le vienen de fuera, y ademas tienen algo interno que es un estado (local)
Este componente (trabajando con componente de clase) tiene render() antes del return (9render(return{...}))
Este render se ejecuta cuando se monta y cuando cambia el estado y cuando cambia props.

¿Como encaja redux?

Nosotros tenemos un estado global (E.G) y las actions (Act.) y tambien se puede usar Dispatch (Disp.) 
Como y donde se despachan, donde estará el estado global?

Entender: El estado global para que el componente lo pueda utilizar (para que al cambiar se renderice y se use) entonces
deben ir en las "props".

Y si mi estado global tiene, por ej un contador:0, quiero mostrar una propiedad dentro, entonces uso : this.props.contador 
(asi el componente puede usar el estado global, ya que está dentro del componente tambien)

Refresh: cambiar el estado global, cambia las props (del componente), y al cambiar las props se renderiza (render()) y asi
se actualiza.

Ej: En el componente podemos tener una funcion que puede ser el dispatch(incremento), otra con dispatch(decremento) esto
dentro de la misma funcion (como los ejercicios con el reducer) y estos cambios se van a mandar a las props. Suponiendo de 
que está enlazado a un boton, al apretarlo hace la funcion y se ejecuta alguna de esas funciones creadas (incremento o 
decremento) (onClick = {this.props.incremento}) que va a mandar a props al estado global, y a la vez estas funciones que hacen
dispatch las mando sin tener que hacerlo aparte. 

Dato: los componentes pueden cambiar el estado global, o no, al igual que puede conseguir solamente sus datos, o no.

Con <Provider> logra que al meterle el Store dentro hace que todos los componentes pueden tener acceso al estado global, y asi
que cada uno quiera manipularlo o no porque puede.

INSATALACION: rmp i redux @4.0.5 react-redux redux-thunk
    crar una carpeta redux, dentro los actions, reducer y store (para poder arrancar y diferenciar de react)

Empezar por actions:

//action.js

export const INCREMENT =  "INCREMENT";
export const DECREMENT = "DECREMENT";


export const increment = ()=>{
    return{type: "INCREMENT"};
}
export const decrement = ()=>{
    return{type: "DECREMENT"};
}



//reducer.js

import {INCREMENT, DECREMENT} from "./action.js"


const initialState = {
    contador : 0;
    
}

const reducer = (state = initialState, action)=>{
    swith (action.type)
        case "INCREMENT":
            return{
                ...state,
                contador:state.contador +1
            }
        case "DECREMENT":
            return{
                ...state,
                contador:state.contador -1
            }
        default:
            return{...state}
        
}



//store.js

import {createStore} from "redux"
import reducer from "./reducer"


const store = craateStore(reducer)

export default store;




Fuera de la carpeta:

//index.js

(todos los import)
import {Provider} from "react-redux"

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>

);

Estos ejemplos es la fase inicial para crear los primeros pasos de la aplicacion. Ahora a darle funcionalidades:

INSTALACION: npm i react-router-dom@5.0.2 

//index.js

(todos los import)
import {Provider} from "react-redux"

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>

);


Crear la carpeta componentes:

componente contador:

//contador.jsx

import React from "react";
import {connect} from "react-redux"; 
import {increment, decrement} from "./redux/actions.js"

class Contador extends React.component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <p>Soy el componente CONTADOR DE CLASE</p>
                <P>Esto será el contador del estado global: {this.props.contador}</p>
                <button onClick= {this.props.increment}>+</button>
                <button onClick= {this.props.decrement}>-</button>
            </>
        )
    }

    const mapStateToProps = (state) =>{
        return {
            contador: state.contador 
        }
    }

    const mapDispatchToProps = (dispatch)=>{
        return{
            increment: ()=>{
                dispatch(increment( ))
            },
            decrement: ()=>{
                dispatch(decrement())
            }
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Contador)


// Esto es para poder conectar el componente con el estado global, necesito importar connect y ponerle en el export
default connect() recibe una funcion, y luego el componente a exportar.
Dentro de connect(mapStateToProps) este mapsStateToProps() es la funcion que hace que manda el estado global (state) a las props, recibe el estado y retorna un objeto con una serie de propiedades, que son un paquete de propiedades (variables que se les puede poner cualquier nombre, mientras que el lugar donde saco las propiedades este bien no hay drama, pero con convencion es mejor dejarle el nombre que me recuerde el componente adecuado) que se quieren
mandar a las props., Haciendo esto se puede mandar el contador: state.contador (este state.contador viene del Store)

La primera funcion del connect (mapStateToProps,funcion2) es llevar el paquete de variables del store global a las props.
La funcion 2 hace el DISPATAH:
    Define las funciones que hacen dispatch y las manda a props. Es una funcion que recibe dispatch retorna una funcion que 
    despacha la accion a despachar (increment o decrement) y las manda a props.

LA PRIMERA FUNCION LEE LAS PROPIEDADES, LA SEGUNDA MODIFICA LAS PROPIEDADES (y no se dejan en blanco los lugares, siempre
con algo, al menos con null por si no se usa)

Increment es una funcion que hace dispatch de la action increment, y use la funcion que las contiene para mandarlas a props,
y asi poder usarlas tambien dentro del componente y fuera por exportar el componente (Contador).



//Users.jsx

import React from "react";

class Users extends React.component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <>
            <p>Soy el componente Users</p>
            </>
        )
    }

}

//Dejo el ejemplo aca sin hacer
Se crea la accion, se exporta la accion, ponemos al initialState una nueva propiedad (users:[])
Para poder trabajar con esto es replantear el store: importar ademas de createStore, applyMiddleware, compose from "redux".
Tambien importar thunkMiddleware from "redux-thunk".
DENTRO de const store= createStore (reducer, composeEnhancer(applyMiddleware(thunkMiddleware)));
El Middleware sirve para hacer una llamada a la api sin darle la responsabilidad al reducer.
tambien tener un const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

Este llamado a la api se hace en la carpeta e redux en action.js
Ya no se retorna un objeto sencillo, sino que ahora será:

export const getUsers = ()=>{
    return function(dispatch){
        fetch("LINK del lugar de la api")
        .then(response=>response.json())
        .then(data=>dispatch(type: GET_USERS, payload:data))
    }
}

FUNCION que recibe dispatch, esta va a traer con fetch la api, hago la peticion, lo transformo a json, luego eso lo recibe
como data y ahi recien se hace el dispatch , con la etiqueta comun pero con la informacion como payload: data y eso va 
derecho al reducer

Dentro del reducer no se va a enterar del despelote que hizo la action, solo recibe la action que tiene un type y un payload.

case GET_USERS:
    return{
        ...state,
        users.action.payload
    }

Ahora dentro del componente users imortamos {connect} from "react-redux", tambien {getUsers} from "./actions"
y en el export

//Users.jsx

import React from "react";

class Users extends React.component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getUsers() //
    }
    render(){
        return (
            <>
            <p>Soy el componente Users</p>
            {this.props.users.map(user=>{
                return(
                    <User 
                    name= {user.name}
                    id = {user.id}
                    username = {user.username}
                    key = {user.id}
                />
                )
                
            })}
            </>
        )
    }

}

//reducer.js

const mapStateToProps= (state)=>{
    return{
        users: state.users
    }
}
const mapDispatchToProps= (dispatch)=>{
    return{
        getUsers: ()=>{dispatch(getUsers())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Users)


CREAR OTRO componente que muestre la informacion que quiera mostrar que se trajeron en los anteriores js, con
props.name, props.id, etc.

//App.js

import Contador from "./componentes/contador.jsx"

funciton App(){
    return {

    }
}


