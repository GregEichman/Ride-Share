import React, { Component } from 'react';
import Login from "./login";
import List from "./list";
// import Ride from "./ride-detail";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <List />
      </div>
    );
  }
}

export default App;
