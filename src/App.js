import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './header';
import Ride from './ride-detail';
import Login from "./login";
import List from "./list";

class App extends Component {
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
