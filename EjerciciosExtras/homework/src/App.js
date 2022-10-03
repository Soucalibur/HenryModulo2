import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Users from "./components/Users/Users"
import Buscador from "./components/Buscador/Buscador"
import UserPosts from "./components/UserPosts/UserPosts"
import {CommentsPost} from "./components/CommentsPost/CommentsPost"


function App() {
  return (
      <React.Fragment>
         <NavBar />
          <Route exact path="/filter/posts" component={Users} />
          <Route path="/" component={Buscador} />
          <Route path="/users/:id/posts" component={UserPosts} />
          <Route exact path="/user/:userid/post/:id/coments" component={CommentsPost} />

      </React.Fragment>
  )
}

export default App
