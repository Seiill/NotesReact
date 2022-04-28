import React from "react";
import {NavLink} from "react-router-dom"
import logo from '../assets/imgs/logo.svg';
import '../assets/css/App.css';

const Header = () => {
    return(
        <nav  id="navbar" className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <NavLink to="/" className="navbar-brand">
                    <img className="App-logo" src={logo} alt="logo" width="80"/>
                </NavLink>
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink to="articles" className="nav-link">Articulos</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;