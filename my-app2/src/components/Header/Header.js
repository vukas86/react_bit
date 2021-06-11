import React from 'react';
import './Header.css';
import logo from '../../images/d.logo.png'

const Header = () => {
    return (
        <header>
            <img src={logo} />
            <input type="text" name="search" />
        </header>
    )
}

export { Header };