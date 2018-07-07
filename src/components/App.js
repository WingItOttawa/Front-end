import React, { Component } from 'react';
import '../style/css/App.css';
import NavBar from './navbar/Navbar';
import Intro from './intro/Intro';

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
