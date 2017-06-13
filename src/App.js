import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './header';
import Ride from './ride-detail';
import Login from "./login";
import List from "./list";
import firebase from "firebase";

// const jackRide = "Jack Weisse2017-06-15 09:30:00";
// const bradRide = "Brad Aleckson2017-06-16 13:30:00";
// const initUsers = {
//   jackweisse: {
//     name: "Jack Weisse",
//     email: "jweisse@nm.com",
//     phone: "123-456-7890"
//   },
//   bradaleckson: {
//     name: "Brad Aleckson",
//     email: "baleckson@nm.com",
//     phone: "976-534-2109"
//   }
// }; 

// const initRides = {
//   [jackRide]: {
//     "id": "Jack Weisse2017-06-15 09:30:00",
//     "driver": "Jack Weisse",
//     "date": "2017-06-15 09:30:00",
//     "capacity": 4,
//     "direction": "F_to_DT",
//     "notes": "Note for Jack's ride",
//     "passengers": []
//   },
//   [bradRide]: {
//     "id": "Brad Aleckson2017-06-16 13:30:00",
//     "driver": "Brad Aleckson",
//     "date": "2017-06-16 13:30:00",
//     "capacity": 6,
//     "direction": "F_to_DT",
//     "notes": "Note for Brad's ride.  He has a sweet minivan, 13 years old and >201,000 miles!",
//     "passengers": []
//   }
// }


class App extends Component {
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
  }

  componentDidMount() {
    const database = firebase.database();
    // database.ref("riders").set(initRides);
    // database.ref("users").set(initUsers);
    database.ref("riders").once("value").then((snapshot)=>{
      console.log(snapshot.val());
    }).catch(console.log); 
    database.ref("users").once("value").then((snapshot)=>{
      console.log(snapshot.val());
    }).catch(console.log); 
  }
  
  state = {
    user: {},
    rides: {}
  }

  render() {
    const { rides } = this.props
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={(props) => {
              return (
                <div>
                  <Login user={this.state.user}/>
                </div>
              )}} />
          <Route exact path="/home" render={(props) => {
              return (
                <div>
                  <List rides={this.props.rides}/>
                </div>
              )}} />
          <Route exact path="/ride/:id" render={ (props) => {
              const ride = rides.find(item => item.id.toString()  === props.match.params.id)
              return (
                <div>
                  <Ride ride={ride}/>
                </div>
              )}} />
        </div>
      </Router>
    );
  }
}

export default App;
