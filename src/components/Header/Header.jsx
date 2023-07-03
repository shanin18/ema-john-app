import React, { useContext } from 'react';
import "./Header.css";
import img from "../../images/Logo.svg"
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {
    const {user, userSignOut} = useContext(AuthContext);

    const handleSignOut = () =>{
        userSignOut()
        .then(result => {})
        .catch(err => console.log(err.message))
    }

    return (
        <div>
            <header>
                <nav id='navbar'>
                    <img src={img} alt="ema-john-logo"/>
                    <div className='nav-items'>
                        <Link to="/">Shop</Link>
                        <Link to="/review">Order Review</Link>
                        <Link to="/inventory">Manage Inventory</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/signUp">SignUp</Link>
                        {user&& <small className='text-white'>welcome {user.email} <button onClick={handleSignOut} className='bg-orange-500 text-white px-5 py-2 rounded'>sign Out</button> </small> }
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