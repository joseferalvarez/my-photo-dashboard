import React from 'react';
import { PropTypes } from 'prop-types'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import "../styles/_photo.scss"

const PhotoSaved = (props) => {
    return (
        <div>
            <div className="card">
                <img className='card__img' src={props.urlregular} alt="" />
                <div className='card__likes'>
                    <FavoriteBorderIcon className='likes__icon' />
                    <p className='likes__num'>{props.likes}</p>
                </div>
                <p className='card__size'>{`${props.width} x ${props.height}`}</p>
                <p className='card__date'>{props.date}</p>
            </div>
        </div>
    );
}

PhotoSaved.propTypes = {
    id: PropTypes.string,
    description: PropTypes.string,
    urlfull: PropTypes.string,
    urlregular: PropTypes.string,
    urlthumb: PropTypes.string,
    likes: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    date: PropTypes.string
}

export default PhotoSaved;
