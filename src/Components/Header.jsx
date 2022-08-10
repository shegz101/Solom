import React from 'react';
import logo from '../solomon.png';
import '../Styles/Header.css';

const Header = () => {
    return (
        <div className="header__section">
            <div className='header__logo'>
                <span><img src={logo} style={{fontSize:'20px',height:'29px',marginTop:'25px',borderRadius:'15px',}} alt="solomon-logo"/></span>
                <h1 style={{color:'white',paddingLeft:'10px', cursor:'pointer',}} className='header-text'>Solomon</h1>
            </div>

            <div>
                <nav className='nav__links'>
                    <ul style={{color:'white', fontSize:'25px'}}>Home</ul>
                    <ul style={{color:'white', fontSize:'25px'}}>Artists & Creators</ul>
                    <ul style={{color:'white', fontSize:'25px'}}>Your Profile</ul>
                </nav>
            </div>

            <div>
                <button className='connect__wallet'>Connect Wallet</button>
            </div>

        </div>
    )
}

export default Header;