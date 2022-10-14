import React from 'react';

import '../styles/_not-found.scss';

const NotFound = () => {
    return (
        <div className='container'>
            <div className='img'></div>
            <div className='text'>
                <h2 className='text__title'>Error 404</h2>
                <p className='text__description'>Sorry, we have not been able to find the page you are looking for.</p>
            </div>
        </div>
    );
}

export default NotFound;
