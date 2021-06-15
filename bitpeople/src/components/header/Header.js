import React from "react";


import './Header.scss';

function Header() {
    return (
        <div className="header">
            <p className="logo">BIT People</p>
            <img className="icon" src="icons/refresh-ccw.svg" alt="align_icon"></img>
            <img className="icon" src="icons/align-justify.svg" alt="align_icon"></img>
        </div>
    )
}

export { Header };
