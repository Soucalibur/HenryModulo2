
Datos a tener en cuenta para esta clase

/////////////////////////////////////////////////////////////////////
Componente funcional: hacer un const -nombre de la funcion que vamos a hacer(FuncionalE)- y hacer lo siguiente que sería darle
dinamica de funcion (props)=>{return <> contenido html </>} y asi. Aterior a esto se importa React from "react".

Trabajando dentro:

import React from "react";

const FuncionalE = (props){
    return(
        <>
            <h1> Soy titulo</h1>
            <p> {props.text}    </p> está encerrado con llaves para que se reconozca que viene de javascript, y se accede al 
                                    objeto props con su propiedad text

        
        </>
    )
}


export default FuncionalE; 

////////////////////////////////////////////////////////////////////
Componente clase: se importa React from "react", pero aca se trabaja con clases.


class ClaseMia extends React.Component{            el extends react.component es para darle ese formato
    constructor(props){                 por trabajar con clase se necesita el constructor, y este recibe props
        super(props);                    este super es para que la clase herede las propiedades pasadas de props
    }                                

    render(){             render es una funcion que hace return de un componente (como el de arriba a partir de return)       
        return(             
            <>
            <h1> Soy titulo </h1>
            <p> {this.props.text}    </p> acá se usa el this para poder hacer referencia al objeto que instancia la clase y asi
                                     poder llamar a sus propiedades.

            </>
        )                  
        
    }
}

export default ClaseMia; esta parte es la necesaria para poder utilizarla en otro documento 

Se arma en paralelo para ver las diferencias entre uno y otro. En el de clase se necesita hacer el super(props) para heredar 
las propiedades, y la funcion render() para poder hacer ese apartado.

////////////////////////////////////////////////////////////////////
Componente de clase es la primera que se trabajo, y se utiliza el de los componentes, pero todavia se usa las de clase,
entonces podemos pasar de clase a funcional de la siguiente manera:

**********
Estados
**********

Un componente recibe (props), el componente tiene un estado y con esto se profundiza el DOM. 
El estado es la informacion local del componente. Las props es informacion que usa el componente para renderizarlas.
Se puede acceder al estado del componente a traves del objeto con this.state

El estado del componente puede cambiar, por lo que se pueden tener muchos cambios para que si necesito tener multiples
estados se puedan actualizar sin problema. React cada vez que detecte un cambio lo renderiza otra vez. Estos solo 
se renderizan cuando se hagan cambios o cambien las propiedades recibidas.Cuando cambio props o estado se renderiza, pero si cambio una variable cualquiera no se renderiza.

Dato: props no es igual a state (state es el estado interno)

Trabajando dentro:


class ClaseMia extends React.Component{            
    constructor(props){                 
        super(props);           
        this.state={
            contador:0,
        }
        this.condador2 = 0;

        clickHandler =()=>{         //aumentar estado 
            this.setState({contador:this.state.contador+1},()=>{
                console.log(this.state.contador);
            })
        } //aumentar estado    
        clickHandler2 =()=>{         //aumentar variable  
            this.condador2 = this.contador2 +1
        }     
    }                                

    render(){          
        return(             
            <>

            <h1> Soy titulo </h1>
            <p> {this.props.text}    </p> 

            <button onClick={this.clickHandler}>Aumentar estado </button>
            <p> {this.state.contador}    </p> 

            <button onClick={this.clickHandler2}>Aumentar variable </button>
            <p> {this.contador2}    </p> 
            </>
        )                  
        
    }
}

78.Se utiliza el this.state para darle estado a la clase constructora. El contador tiene una propiedad inicializadora con contador=0, o null, o undefined, o algun valor pero tiene que tener algo. Tambien puedo darle mas propiedades al estado, 
pero para el ejemplo solo se esta usando el contador.

Vamos a ver el estado del componente:

Creamos un tag <p>(o cualquier otro como <h3>) y ponemos this.state.contador y asi se accede al valor del estado actual.
El this.contador2 es para caso practico de ver como se pueden ir alterando uno y otro. Se crean botones que accionen con ellos


Al hacer click en el boton se hace el cambio pero en el html puesto en pantalla no muestra ningun cambio.
Al hacer lo mismo pero con el estado si se refleja el cambio, pero se hace de manera diferente a como se hizo en la variable
(se usa el setState)
El metodo setState recibe por parametro un objeto {contador} y necesita setearle el valor que quiere tener (:this.state.contador+1)

Dato: si se da otro valor a la variable, y esta se puede llegar a mostrar en pantalla, solo se mostraran los cambios
    cuando se renderize el "ESTADO", sino no se verán sus cambios.
    Construir el componente es diferente a renderizar el componente (constructor diferente de render) entonces en el 
    constructor le seteo las cosas que debe tener y hacer, y el render es como se va a mostrar y utilizar las cosas.

El this.setState es el que cambia el estado, y siempre debe usarse para cambiarlo.

Dato: los console.log() que se hagan para mostrar los cambios del state se hacen antes que la funcion que actualiza el 
    estado, por lo que al ver ambos en pantalla el console.log() me mostrará el resultado anterior al cambio. Para 
    solucionar esto se le pasa una callback que es: cuando se termine de cambiarlo, ahi ejecutame la funcion que cambia
    el estado, y ahora haceme el console.log() (es decir, darle: ()=>{}) Lo mejor tambien es trabajar con estas arrow
    functions para que los this no se pierdan, porque usar la otra forma seria muy engorroso.
    Otra forma de hacerlo es con el lifecycle ...


////////////////////////////////////////////////////////////

Ciclo de vida (del componente)

Montaje del componente (nacimiento, aparece); luego se ejecuta el metodo constructor (solo se ejecuta 1 vez);
    luego recibe las props y se renderiza; al terminar de renderizar react actualiza el DOM y se dispara una funcion, 
    que se llama componentDidMount (se puede o no definir en el componente, si no esta definida no se ejecuta)

Trabajando dentro:


class ClaseMia extends React.Component{            
    constructor(props){                 
        super(props);           
        this.state={
            contador:0,
        }
        this.condador2 = 0;

        clickHandler =()=>{         //aumentar estado 
            this.setState({contador:this.state.contador+1}{

            })
        } //aumentar estado    
        clickHandler2 =()=>{         //aumentar variable  
            this.condador2 = this.contador2 +1
        }     
    }          

    componentDidMount(){
        console.log("Acabo de nacer")
    }                      

    componentDidUpdate(){
        console.log(this.state.contador)
    }

    componentDidUnmount{
        console.log("Me estoy yendo")
    }

    render(){          
        return(             
            <>

            <h1> Soy titulo </h1>
            <p> {this.props.text}    </p> 

            <button onClick={this.clickHandler}>Aumentar estado </button>
            <p> {this.state.contador}    </p> 

            <button onClick={this.clickHandler2}>Aumentar variable </button>
            <p> {this.contador2}    </p> 
            </>
        )                  
        
    }
}

169.Este componentDidMount() se ejecuta internamente sin que uno se entere (el console.log()es para dar veracidad de que se
ejecuta) Este componentDidMount solo se activa cuando acaba de iniciar, luego se usa el proximo.
Si se cambia el state del componente, por ende se renderiza, tambien se dice que el componente se actualizo, entonces hay
un componentDidUpdate() donde se ejecuta y ahi esto se podria usar en vez de la callback de antes para que no haya ese 
delay con el console.log()
Finalmente se obtiene el desmontaje, que es el evento componentDidUnmount() que es antes de irte, hace algo.
El componente se desmonta cuando se va de la pantalla,cuando deja de mostrarse.
Estas funciones no hace falta que se pongan, a menos que el componente lo requiera.

//////////////////////////////////////////////////////////////

Componentes Funcionales

En el flujo de esto, la informacion va hacia los hijos, y los eventos hacia los padres. Es decir se le pasan por las props
a los hijos, y estos cuando hacen funciones, los padres tienen una funcion que asegura que se ejecuto.

Tanto como los componentes funcionales como los de clase hacen lo mismo, nada mas que los funcionales son mas sencillos
de programar y manipular.

Hooks: metodo de react que sirve para enlazar variables con funciones de forma tal que se pueda trabajar de forma mas
declarativa con las distintas partes del componente, independientemente del estado.
En esta caso el hook se llamará useState:

************
const [state, setState] = useState(initialState); destructuring, el hook me retorna un array con dos cosas dentro, que una
        es el estado de dentro y la otra es la funcion que ya está preparada para cambiar ese estado. Tanto los nombres 
        de state y setState pueden tener otros nombres.
************

import React from "react";
import {useState} from "react";

const FuncionalE = (props) =>{
    
    const [contador, setContador] = useState(0);
    const [texto, serTexto] = useState("");

    const aumentar = ()=>{
        setContador(contador+1)
    }

    const changeHander = (event)=>{
        setTexto(event.target.value)
    }

    return(
        <>
            <h1> Soy titulo</h1>
            <p> {props.text}    </p> 
            <h3> {contador} </h3>

            <h4> {texto} </h4>
            <input type="text" onChange={changeHandler}>Aumentar  </input>
            <button onClick={aumentar}> Aumentar contador </button>
        
        </>
    )
}


export default FuncionalE; 

232.Se acaba de crear n estado que tiene valor 0 y tiene una funcion que esta lista y preparada para cambiar 
el estado contador (useState(0 este es el valor inicial))
Por convencion y para entender mejor el codigo, si al estado le pongo contador de nombre entonces la funcion que lo altera se debe llamar igual (setContador).
En el h3 como contador es un estado yo puedo ver reflejado que cada vez que camie, se vea.
El setContador() como funcion ya está armado, pero no tiene los valores a cambiar, entonces lo pongo debajo de la const
las cosas que va a hacer que altere el contador

El ciclo de vida de los componentes funcionales esta manejado por useEfects() otra funcion que se verá despues.

target: cuando tengo un evento y un manejador del evento, taget es el evento que dispara el evento, en este caso es input, 
y este input tiene un value.
Esta parte con el input es lo mismo que lo de arriba pero enlazado para que cuando se escriba algo pase algo.

Para la tarea de hoy instalar axios, con npm i axios, importarlo: import axios from "axios"; y utilizar la funcion axios.get