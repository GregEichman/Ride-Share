import React, { Component } from 'react';
import './App.css';
import Ride from './ride-detail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-headers">
          <h2>Welcome to React</h2>
          <h3>Brad git hub branch test</h3>
        </div>
        <Ride />
      </div>
    );
  }
}

export default App;
