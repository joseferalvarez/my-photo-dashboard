import React, { useState, useEffect } from 'react';
import Photo from '../components/photo';
import "../styles/_my-photos.scss"

const MyPhotos = () => {
    const [photos, setPhotos] = useState(localStorage.getItem("items-photos") ? JSON.parse(localStorage.getItem("items-photos")) : []);

    return (
        <div className='photos__container'>
            {photos.map((obj) => (
                <Photo id={obj.id}
                    description={obj.description}
                    urlfull={obj.urlfull}
                    urlregular={obj.urlregular}
                    urlthumb={obj.urlthumb}
                    likes={obj.likes}
                    width={obj.width}
                    height={obj.height}
                    date={obj.date} />
            ))}
        </div>
    );
}

export default MyPhotos;
