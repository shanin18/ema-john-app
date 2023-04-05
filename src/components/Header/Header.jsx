import React from 'react';
import "./Header.css";
import img from "../../images/Logo.svg"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header>
                <nav id='navbar'>
                    <img src={img} alt="ema-john-logo"/>
                    <div className='nav-items'>
                        <Link to="/">shop</Link>
                        <Link to="/review">Order Review</Link>
                        <Link to="/inventory">Manage Inventory</Link>
                        <Link to="/login">Login</Link>
                    </div>
                    <div className='hamburger-button'>
                        <div className='lines'></div>
                        <div className='lines'></div>
                        <div className='lines'></div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;