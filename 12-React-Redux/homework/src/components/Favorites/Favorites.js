import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import {removeFavoriteMovie} from "../../actions/index"

export class ConnectedList extends Component {
  // constructor(props){
  //   super(props);
  // }

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          
          {this.props.favoritos.map((peli)=>
            <li key = {peli.id}>
              <Link to= {`movie/${peli.id}`}>
              {peli.title}
              </Link>
              <button 
              onClick={()=>{this.props.removeFavoriteMovie(peli)}}>X</button>
            </li>
          )}

        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return{
    favoritos: state.peliculasFavoritas
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    removeFavoriteMovie: peli=>{dispatch(removeFavoriteMovie(peli))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ConnectedList);
