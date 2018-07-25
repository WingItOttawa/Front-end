import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import Intro from './Intro/Intro';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Intro />
      </div>
    );
  }
}

export default App;
