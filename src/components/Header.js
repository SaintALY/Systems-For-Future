import React from "react";
import logo from '../images/logo.png';
import handwritten from '../images/handwritten.png';
import './Header.css';

function Header() {
    return (
        <header>
            <img src={logo} alt="logo" className="header--img"/>
            <img src={handwritten} alt="handwritten" className="header--handwritten"/>
        </header>
    );
}

    export default Header;