import React from "react";
import AppsIcon from '@material-ui/icons/Apps';
import ReplayIcon from '@material-ui/icons/Replay';

import './Header.scss';

function Header() {
    return (
        <div className="header">
            <p className="logo">BIT People</p>
            <nav>
              <ReplayIcon className="head_icon"/>
                <AppsIcon className="head_icon" /> 
            </nav>
        </div>
    )
}

export { Header };
