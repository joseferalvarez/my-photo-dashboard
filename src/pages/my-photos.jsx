import React from 'react';
import Photo from '../components/photo';
import "../styles/_my-photos.scss"

const MyPhotos = () => {
    const array = JSON.parse(localStorage.getItem("items-photos"));

    return (
        <div className='photos__container'>
            {array.map((obj) => (
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
