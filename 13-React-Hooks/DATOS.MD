HOOKS

Api que nos permite en los componentes funcionales hacer lo que se hizo en los de clase.
Simplifican sintaxis y codigo.
Entendido el useState() para estados locales, esta el useEffect() que permite realizar efectos secundarios en el estado.
Si tengo un hook, con una callback que se ejecuta cuando se haga y actualize... falta


Ejemplo informativo de la homework pasada en el componente movie.


useState()=> Crea estados locales
useEffect()=> Manejar efectos secundarios
useDispatch()=> es un mapDispatchToProps (es un disparador de dispatch sin tener que crear una funcion que despacha)
useSelector()=> es un mapStateToProps

Dentro de useEffect()
Recibe 2 parametros. El 1 es una cb (que quiero hacer cuando el componente se monta o actualiza)
Cuando se monta, anda a buscar el detalle de pelicula (maneja el ciclo del componente del MOUNT (montaje) y UPDATE)

El 2 recibe un array de dependencias (es un array al que le puedo dar variables. Cuando esta variable se modifique, 
volvé a hacer el UPDATE  de useEffect())
Cada vez que haya un cambio en estado, usa el useEffect().

HOOKS IMPORTADOS DE "react"

Dato: en componentes funcionales NO se usa el this.

const Movie = (props)=>{
    const movieId= props.match.params.id
    const dispatch = useDispatch(); //Esto ya me da el poder de hacer el dispatch donde quiera sin tener que hacer un 
                                //  mapDispatchToProps

    const movieDetail = useSelector((state)=>state.movieDetail); //Esto reemplaza a todo el mapStateToProps
}


useEffect(()=>{
    dispatch(getMovieDetail(movieId))
},[dispatch,movieId]);


return (
    {
        movieDetail["Title"]?(
        <div className="movie-detail">
                Detalle de la pelicula  
                <h2>{movieDetail.Title}</h2>
                <p>Tipo: {movieDetail.Type}</p>
                <p>Escritor: {movieDetail.Writer}</p>
                <img src={movieDetail.Poster} ></img>
                <p>Info: {movieDetail.Plot}</p>
                <p>Rating: {movieDetail.Ratings[0].Value}</p>
                
        </div>):(<p>LOADING...</p>);
    }
    
            
        );

export default Movie (sin hacer el connect)


Para sacar el delay de la informacion de las pelicuals viejas:

export const CLEAN_DETAIL = "CLEAN_DETAIL"

export const cleanDetail = ()=>{
    return {type:CLEAN_DETAIL }
}

////////////////////

reducer//

case CLEAN_DETAIL:
    return{
        ...state,
        detallesPelicula: {},
    },

movie//

import {cleanDetail} from //ruta

useEffect(()=>{
    dispatch(getMovieDetail(movieId))
    return function(){
        dispatch(cleanDetail);
    };
},[dispatch,movieId]);

La parte del return function(){dispatch(cleanDetail())} hace que al momento de cerrar haceme un UNMOUNT (desmontar), entonces
al inicio hace el getMovieDetail y a la salida hace cleanDetail (cada vez que se desmonta)