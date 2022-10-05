import React from 'react';
import { PropTypes } from 'prop-types'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "../styles/_photo.scss"

const Photo = () => {
    return (
        <div className="card">
            <img className='card__img' src='https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' alt="" />
            <div className='card__likes'>
                <FavoriteBorderIcon className='likes__icon' />
                <p className='likes__num'>45</p>
            </div>
            <p className='card__size'>1920x1080</p>
            <p className='card__date'>18/12/1999</p>
        </div>
    );
}

Photo.propTypes = {
    url: PropTypes.string,
    likes: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    date: PropTypes.string

}

export default Photo;
