import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './header';
import Ride from './ride-detail';
import Login from "./login";
import List from "./list";

class App extends Component {
  state = {
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
                  <Login />
                </div>
              )}} />
          <Route exact path="/home" render={(props) => {
              return (
                <div>
                  <List rides={this.props.rides}/>
                </div>
              )}} />
          <Route exact path="/ride/:id" render={ (props) => {
              // console.log(props.match.params.id);
              // console.log(`rides:`);
              // console.log(rides);
              const ride = rides.find(item => item.id.toString()  === props.match.params.id)
              // console.log(`Ride:`);
              // console.log(ride);              
              // console.log(`\n\n`);
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
