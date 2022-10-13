import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "../styles/topbar.scss"

const Topbar = () => {

    return (
        <nav className="topbar">
            <div className='topbar__container'>
                <p className='topbar__logo'>My photo dasboard</p>
                <MenuIcon className='burger burger__open' onClick={openMenu} />
                <CloseIcon className="cross" onClick={closeMenu} />
            </div>
            <div className='nav'>
                <ul className='nav__options'>
                    <li className='nav__li'><NavLink to="/my-photo-dashboard/" className='nav__li__a'>Home</NavLink></li>
                    <li className='nav__li'><NavLink to="/my-photo-dashboard/myphotos" className='nav__li__a'>My Photos</NavLink></li>
                    <li className='nav__li'><NavLink to="/my-photo-dashboard/search" className='nav__li__a'>Search</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

const openMenu = () => {
    document.querySelector(".cross").classList.add("cross__open");
    document.querySelector(".burger").classList.remove("burger__open");
    document.querySelector(".nav").classList.add("nav-visible");
}

const closeMenu = () => {
    document.querySelector(".cross").classList.remove("cross__open");
    document.querySelector(".burger").classList.add("burger__open");
    document.querySelector(".nav").classList.remove("nav-visible");
}

export default Topbar;
