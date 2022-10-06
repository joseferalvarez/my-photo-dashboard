import React from 'react';
import { PropTypes } from 'prop-types';
import { saveAs } from "file-saver";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import "../styles/_photo.scss"
import "../styles/_photo-saved.scss"

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

    const saveFile = () => {
        saveAs(props.urlfull, `${props.id}.jpg`);
    }



    if (!props.date) {
        return (
            <div className="card">
                <img className='card__img' src={props.urlregular} alt="" />
                <div className='card__likes'>
                    <FavoriteBorderIcon className='likes__icon' />
                    <p className='likes__num'>{props.likes}</p>
                </div>
                <p className='card__size'>{`${props.width} x ${props.height}`}</p>
                <AddCircleOutlineIcon className='card__add' onClick={addPhotoStorage} />
            </div>
        );
    } else {
        return (
            <div className="card-saved">
                <img className='card__img-saved' src={props.urlregular} alt="" />

                <div className='card__data-saved'>
                    <div className='card__info'>
                        <div className='card__info-saved'>
                            <p className='card__date-saved'>{props.date}</p>
                            <p className='card__size-saved'>{`${props.width} x ${props.height}`}</p>
                        </div>
                        <div className='card__likes-saved'>
                            <FavoriteBorderIcon className='likes__icon-saved' />
                            <p className='likes__num-saved'>{props.likes}</p>
                        </div>
                    </div>
                    <p className='card__description-saved'>{props.description}</p>
                </div>
                <div className='card__buttons'>
                    <DownloadForOfflineIcon className='card__download' onClick={saveFile} />
                    <HighlightOffIcon className='card__delete' />
                </div>
                <ModeEditIcon className='card__edit' />

            </div>
        );
    };
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
