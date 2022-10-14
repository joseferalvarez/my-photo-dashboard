import React from 'react';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import "../styles/_footer.scss"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__container'>
                <p className='footer__logo'>My photo dasboard</p>
                <p className='footer__rights'>&copy; All rights reserved</p>
            </div>
            <div className='footer__author'>
                <p className='footer__author-name'>A website created by Jose Fernando Álvarez</p>
                <div className='footer__social-media'>
                    <a className='footer__social-media__a' href="https://www.linkedin.com/in/jose-fernando-alvarez"><LinkedInIcon /></a>
                    <a className='footer__social-media__a' href="https://github.com/JoseFerAlvarez"><GitHubIcon /></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
