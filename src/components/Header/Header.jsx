import React from 'react';
import "./Header.css";
import img from "../../images/Logo.svg"

const Header = () => {
    return (
        <div>
            <header>
                <nav id='navbar'>
                    <img src={img} alt="ema-john-logo"/>
                    <div className='nav-items'>
                        <a href="/order">Order</a>
                        <a href="/order-review">Order Review</a>
                        <a href="/inventory">Manage Inventory</a>
                        <a href="/login">Login</a>
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