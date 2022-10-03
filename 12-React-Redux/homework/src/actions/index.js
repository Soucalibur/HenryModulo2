


export function getMovie (name){
    return function (dispatch){
        return fetch("https://www.omdbapi.com/?apikey=597a8f7&s="+name)
        .then(response=>response.json())
        .then((data)=>{
        
            dispatch({type:"GET_MOVIE", payload:data}) //el dispatch aca es para que trabaje el middleware, este haga la
                                                       //consulta y ahi se haga el dispatch (los demas son solo etiqueta,
                                                       // por eso no llevan los demas dispatch)
    });
    };
    
};

export function addMovieFavorite(objNameId){
    return{
        type:"ADD_MOVIE", payload:objNameId
    }
}

export function removeFavoriteMovie(obj){
    return{
        type:"REMOVE_MOVIE",payload:obj
    }
}

export function getMovieDetail(idMovie){
    return function (dispatch){
       fetch(`http://www.omdbapi.com/?apikey=597a8f7&i=${idMovie}`)
       .then((response)=>response.json())
       .then((data)=>dispatch({type:"GET_MOVIE_DETAIL",payload:data }))
    }
}

export const GET_MOVIE = "GET_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";
export const REMOVE_MOVIE = "REMOVE_MOVIE";
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";