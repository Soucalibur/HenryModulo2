import {GET_MOVIE, ADD_MOVIE, REMOVE_MOVIE, GET_MOVIE_DETAIL} from "../actions"

const initialState = {
  peliculasFavoritas: [],
  peliculasBuscadas: [],
  peliculasDetalles: {}
}

const reducer = (state=initialState, action)=>{

    switch (action.type) {
        case GET_MOVIE:
            return{
                ...state,
                peliculasBuscadas: action.payload.Search
            };

        case ADD_MOVIE:
            return{
                ...state,
                peliculasFavoritas: [...state.peliculasFavoritas,action.payload]
            }

        case REMOVE_MOVIE:
            return{
                ...state,
                peliculasFavoritas:state.peliculasFavoritas.filter((e)=>e.id!==action.payload.id)
            }    

        case GET_MOVIE_DETAIL:
            return{
                ...state,
                peliculasDetalles: action.payload
            }
        default:
            return{
                ...state
            };
    }

};

export default reducer
