import React, { Component } from 'react';
import '../../style/css/Navbar.css';

class Navbar extends Component {
  render() {
    return (
        <div className="menu">
            <div className="menu__name"> WingIt </div>
            <div className="menu__options">
            <div className="menu__option">
                <a href="/">Guide</a>
            </div>
            <div className="menu__option">
                <a href="/">Contact</a>
            </div>
            </div>
        </div>
    );
  }
}

export default Navbar;
