import React, { Component } from 'react';
import './App.css';
import Ride from './ride-detail';
import Login from "./login";
import List from "./list";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <List />
        <Ride />
      </div>
    );
  }
}

export default App;
