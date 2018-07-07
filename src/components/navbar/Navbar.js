import React from 'react';
import '../../style/css/Navbar.css';

const NavBar = () => {
    return (
        <div className="menu">
            <div className="menu__name"> WingIt </div>
            <div className="menu__options">
            <div className="menu__option">
                <a href="#">Guide</a>
            </div>
            <div className="menu__option">
                <a href="#">Contact</a>
            </div>
            </div>
        </div>
    );
}

export default NavBar;
