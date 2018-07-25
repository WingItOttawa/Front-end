import React, { Component } from 'react';
import NavBar from './NavigationBar/NavBar';
import Intro from './Hero/Intro';

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
