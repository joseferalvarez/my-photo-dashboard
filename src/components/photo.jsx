import React from 'react';
import { PropTypes } from 'prop-types'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import "../styles/_photo.scss"

const Photo = (props) => {

    const addPhotoStorage = () => {

        if (!localStorage.getItem("items-photos")) {
            localStorage.setItem("items-photos", "[]");
        }

        const array = JSON.parse(localStorage.getItem("items-photos"));
        array[array.length] = {
            id: props.id,
            description: props.description,
            urlfull: props.urlfull,
            urlregular: props.urlregular,
            urlthumb: props.urlthumb,
            likes: props.likes,
            width: props.width,
            height: props.height,
            date: getActualDate()
        };

        const array2 = array.map((e) => e);
        localStorage.setItem("items-photos", JSON.stringify(array2));
        console.log(array2);
    }

    const getActualDate = () => {
        const date = new Date();
        const day = date.toLocaleDateString();
        const time = date.toLocaleTimeString();
        return `${day}, ${time}`;
    }

    return (
        <div className="card">
            <img className='card__img' src={props.urlregular} alt="" />
            <div className='card__likes'>
                <FavoriteBorderIcon className='likes__icon' />
                <p className='likes__num'>{props.likes}</p>
            </div>
            <p className='card__size'>{`${props.width} x ${props.height}`}</p>
            {props.date ? <p className='card__date'>{props.date}</p> : <AddCircleOutlineIcon className='card__add' onClick={addPhotoStorage} />}
        </div>
    );
}

Photo.propTypes = {
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

export default Photo;
