import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';


import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import GoogleButton from 'react-google-button';
import Portfolios from './Components/Portfolios';
import Header from './Header';
import HomePageComponent from './Components/HomePage';
const API = 'http://localhost.com/users';


class App extends Component {
 
  constructor() {
    super();
    this.render = this.render.bind(this);
    this.state = {
      users: []

  }
  fetch('/api/users')
      .then(response => response.json())
      .then(users => {
        this.setState({ users }, () => console.log(users))
      });

}

  render() {
    var users= this.state.users;
    return (
      <Router>
      
  <div>
  <ul>
      {
        users.map(function(user,index) {
           return <li key={index}>{user.category}</li>
        })
      }
    </ul>
        <meta charSet="utf-8" /> 
        <Header/>
        <Route path="/" component={HomePageComponent} exact/>
        <Route path="/portfolios" component={Portfolios} />
        </div>
      </Router>
    );
  }
}



 export default App;
