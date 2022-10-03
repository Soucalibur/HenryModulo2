import React from 'react';
import { connect } from 'react-redux';
import './UserPosts.css';
import {getAllUserPosts} from "../../actions/index"

export class UserPosts extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getAllUserPosts(this.props.match.params.id)
  }
  render() {
    console.log(this.props.userPosts)
    const userid = this.props.match.params.id;
    return (
      <div className="details">
        <h4 className="title">Posts del usuario {userid}</h4>
        <ul>
        {this.props.userPosts.map((posteos)=>
          
            <li key={posteos.id}>
              <p>Título: {posteos.title}</p> 
              <p>Post: {posteos.body}</p>
            
            
            </li>
          
          
        )}
         </ul>
      </div>
    )
  }
}

export const mapStateToProps=(state)=>{
  return{
    userPosts: state.userPosts
  }
}


export const mapDispatchToProps= (dispatch)=>{
  return{
    getAllUserPosts: (id)=>dispatch(getAllUserPosts(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserPosts);