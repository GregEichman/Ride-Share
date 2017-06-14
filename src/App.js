import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './header';
import Ride from './ride-detail';
import Login from "./login";
import List from "./list";
import firebase from "firebase";
let database;

class App extends Component {

  state = {
    curUser: {},
    rides: {},
    users: {}
  }

  componentWillMount() {
    var config = {
        apiKey: "AIzaSyDrYfzqEJBfEFEae-nPPE1l2uVTLdSs3SU",
        authDomain: "ride-share-1eb74.firebaseapp.com",
        databaseURL: "https://ride-share-1eb74.firebaseio.com",
        projectId: "ride-share-1eb74",
        storageBucket: "ride-share-1eb74.appspot.com",
        messagingSenderId: "990239787128"
    };
    firebase.initializeApp(config);
    database = firebase.database();
  }

  componentDidMount() {
    database.ref("rides").once("value").then((snapshot)=>{
      this.setState({
        rides:snapshot.val()
      });
    }).catch(console.log); 
    database.ref("users").once("value").then((snapshot)=>{
      this.setState({
        users: snapshot.val()
      })
    }).catch(console.log); 
  }

  stringChange = (str) =>{
    let newStr = str.toLowerCase();
    let idx = newStr.indexOf(" ");
    while(idx !== -1) {
      newStr = newStr.slice(0,idx)+newStr.slice(idx+1);
      idx = newStr.indexOf(" ");
    }
    return newStr;
  }

  handleLogin = (user)=>{
    const userId = this.stringChange(user.name);
    database.ref(`users/${userId}`).set(user);
    this.setState({
      curUser: user
    });
  }

  render() {
    const { rides } = this.state;
    return (
      <Router>
        <div className="App">
          <Header user={this.state.curUser}/>
          <Route exact path="/" render={() => {
              return (
                <div>
                  <Login user={this.state.curUser} handleLogin={this.handleLogin} />
                </div>
              )}} />
          <Route exact path="/home" render={() => {
              return (
                <div>
                  <List rides={this.state.rides}/>
                </div>
              )}} />
          <Route exact path="/ride/:id" render={ (props) => {
              const ride = rides.find(item => item.id.toString()  === props.match.params.id)
              return (
                <div>
                  <Ride ride={ride} user={this.state.curUser}/>
                </div>
              )}} />
        </div>
      </Router>
    );
  }
}

export default App;
