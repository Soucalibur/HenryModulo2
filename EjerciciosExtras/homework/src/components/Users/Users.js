import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getAllUsers } from '../../actions/index';
import './Users.css';

export class Users extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getAllUsers()
  }

  render() {
    return (
      <div className="details">
        <h4 className="title">Usuarios del blog</h4>
        <ul>
        {this.props.users.map((personas)=>
          <li key={personas.id}>
          <p>Nombre: {personas.name}</p>
          <p>Usuario: {personas.username}</p>
              
          <Link to={`/users/${personas.id}/posts`} className="button">
            VER
          </Link>
           </li>
        )}

        </ul>
      </div>
    );
  }

}

export const mapStateToProps = (state)=>{
  return{
    users: state.users
  }
}

export const mapDispatchToProps = (dispatch)=>{
  return{
    getAllUsers: ()=>dispatch(getAllUsers())
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Users)

