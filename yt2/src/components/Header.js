import React from 'react';  
import './Header.css'
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import  Avatar  from '@material-ui/core/Avatar';


function Header () {
    return(
        <div className="header">
        <div className="header_left">
        <MenuSharpIcon />
        <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="logo"></img>
        </div>

        <div className="header_input">
        <input placeholder="Search" type="text" />
        <SearchIcon className="header_inputButton" />
        </div>

        <div className="header_icons">
        <VideoCallIcon className="header_icon" />
        <AppsIcon className="header_icon"  />
        <NotificationsIcon className="header_icon" />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </div>
        
        </div>
    )
}

export default Header;