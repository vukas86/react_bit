import React from 'react'
import logo from '../../images/Marvel_Logo.svg'
import './Index.scss'

const Header = () => {
    return (
        <header className="center">
            <img src={logo} alt="logo" />
        </header>
    )
}

export default Header;
