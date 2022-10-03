import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import {getMovie, addMovieFavorite} from "../../actions/index"



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovie(this.state.title)
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit" >BUSCAR</button>
        </form>
        <ul>

          {this.props.peliculas.map((pelicula) => 
              <li key={pelicula.imdbID}>
                <Link to ={`/movie/${pelicula.imdbID}`}>
                  {pelicula.Title}
                </Link>
                <button 
                  onClick={() => {
                    this.props.addMovieFavorite({ 
                      title: pelicula.Title, id: pelicula.imdbID 
                    })
                  }}
                >
                FAV
                </button>
              </li>
            )}
          
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return{
    peliculas: state.peliculasBuscadas
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    getMovie: name =>{dispatch(getMovie(name))},
    addMovieFavorite: name =>{dispatch(addMovieFavorite(name))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Buscador);
