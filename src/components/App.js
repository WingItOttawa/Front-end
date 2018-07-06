import React, { Component } from 'react';
import '../style/css/App.css';
import Navbar from './navbar/Navbar';
import Hero from './hero/Hero'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Hero />
      </div>
    );
  }
}

export default App;
