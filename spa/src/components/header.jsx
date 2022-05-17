import React from "react";
import '../App.css';
import HomeBanner from '../assets/HomeBanner.png';

const Header = () => {
    return (
        <header className="navbar-brand">
            <p>This is a header</p>
            <img src={HomeBanner}></img>
        </header>
    )
}

export default Header