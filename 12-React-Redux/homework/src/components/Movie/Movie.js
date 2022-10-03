import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {
    
componentDidMount(){
    this.props.getMovieDetail(this.props.match.params.id)
}

    render() {
        return (
            <div className="movie-detail">
                Detalle de la pelicula  
                <h2>{this.props.infoPeliculas.Title}</h2>
                <p>Tipo: {this.props.infoPeliculas.Type}</p>
                <p>Escritor: {this.props.infoPeliculas.Writer}</p>
                <img src={this.props.infoPeliculas.Poster} ></img>
                <p>Info: {this.props.infoPeliculas.Plot}</p>
                <p>Rating: {this.props.infoPeliculas.Ratings[0].Value}</p>
            </div>
        );
    }
}

getMovieDetail()
const mapStateToProps = (state)=>{
    return{
        infoPeliculas: state.peliculasDetalles
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        getMovieDetail: info=>{dispatch(getMovieDetail(info))}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Movie);