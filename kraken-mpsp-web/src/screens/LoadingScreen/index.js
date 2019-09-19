import React, { Component } from "react";
import { Link } from 'react-router-dom'

import "./styles.css";

export default class LoadingScreen extends Component {

    render() {
        return(
            <div>
                <h1>Página LoadingScreen</h1>

                <div>
                    <ul>
                        <li><Link to="/showcase">ir para Home</Link></li>
                        <li><Link to="/search">ir para Search</Link></li>
                        <li><Link to="/options">ir para Options</Link></li>
                        <li><Link to="/profile">ir para Profile</Link></li>
                        <li><Link to="/contact">ir para Contact</Link></li>
                        <li><Link to="/terms">ir para Terms</Link></li>
                        <li><Link to="/signin">ir para Login</Link></li>
                        <li><Link to="/profile">ir para ProfileRegister</Link></li>
                    </ul>
                </div>

            </div>
        );
    }
}