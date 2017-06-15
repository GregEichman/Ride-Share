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
    // if(this.state.users[userId]) {
    //   alert("you exist");
    // }
    this.setState({
      curUser: user
    });
  }

  findRide = (ride)=>{
    for(let rTemp in this.state.rides) {
      if(ride === rTemp) {
        return this.state.rides[rTemp];
      }
    }
    return false;
  }

  render() {
    //const { rides } = this.state;

    return (
      <Router>
        <div className="App">
          <Header user={this.state.curUser}/>
          <iframe style={{display:"none"}} src="https://www.youtube.com/embed/Im3JzxlatUs?loop=1&autoplay=1&playlist=Im3JzxlatUs"></iframe>
          <Route exact path="/" render={(props) => {
              return (
                <div>
                  <Login user={this.state.curUser} handleLogin={this.handleLogin} />
                </div>
              )}} />
          <Route path="/home" render={(props) => {
              console.log(this.state.rides)
              return (
                <div>
                  <List rides={this.state.rides}/>
                </div>
              )}} />
          <Route path="/ride/:id" render={ (props) => {
              // const ride = rides.find(item => item.id.toString()  === props.match.params.id)              
              // console.log(this)
              // console.log(this.state.rides)
              // const ride = this.state.rides['keithbeste2017-06-16 16:30:00']; //.find(item => item.id.toString()  === props.match.params.id)
              // console.log("App.js ride:")
              // console.log(ride)
              console.log(props.match.params.id);
              const ride = this.findRide(props.match.params.id)
              return (
                <div>
                  <Ride ride={ride} user={this.state.curUser} users={this.state.users}/>
                </div>
              )}} />
        </div>
      </Router>
    );
  }
}

export default App;
