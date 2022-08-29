import React from "react";
import logo from '../logo.svg';
import './Header.css';

function Header() {
    return (
        <header>
            <img src={logo} alt="logo" className="header--img"/>
        </header>
    );
}

    export default Header;