import React from 'react';

import burger from "../assets/icons/menu.png";
import MenuIcon from '@mui/icons-material/Menu';
import "../styles/topbar.scss"

const Topbar = () => {
    return (
        <nav className="topbar">
            <div className='topbar__container'>
                <p className='topbar__logo'>My photo dasboard</p>
                <MenuIcon className='burger' />
            </div>
            <div className='nav'>
                <ul className='nav__options'>
                    <li className='nav__li'><a className='nav__li__a' href="#">Home</a></li>
                    <li className='nav__li'><a className='nav__li__a' href="#">My Photos</a></li>
                    <li className='nav__li'><a className='nav__li__a' href="#">Search</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Topbar;
