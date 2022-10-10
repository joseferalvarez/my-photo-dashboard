import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Photo from '../components/photo';
import SearchIcon from '@mui/icons-material/Search';
import "../styles/_search.scss";

import { getRandomPhotos, sayHello } from '../features/search/searchSlice';
import { useDispatch, useSelector } from 'react-redux';

const Search = () => {

    const dispatch = useDispatch();
    const { images } = useSelector((state) => state.imagesStore);

    const [input, setInput] = useState("");
    const [photos, setPhotos] = useState([]);

    const doSearch = () => {
        dispatch(sayHello());
        dispatch(getRandomPhotos());
        console.log(images)

        const photoList = [];
        if (input !== "") {
            fetch(`${process.env.REACT_APP_API_SEARCH}?client_id=${process.env.REACT_APP_CLIENT_ID}&query=${input}`)
                .then(response => {
                    return response.json();
                }).then(data => {
                    for (let i = 0; i < data.results.length; i++) {
                        photoList.push({
                            id: data.results[i].id,
                            description: data.results[i].description,
                            urlfull: data.results[i].urls.full,
                            urlregular: data.results[i].urls.regular,
                            urlthumb: data.results[i].urls.thumb,
                            likes: data.results[i].likes,
                            width: data.results[i].width,
                            height: data.results[i].height,
                        })
                    }
                    setPhotos(photoList);
                });
        } else {
            fetch(`${process.env.REACT_APP_API_RANDOM}?client_id=${process.env.REACT_APP_CLIENT_ID}&count=24`)
                .then(response => {
                    return response.json();
                }).then(data => {
                    for (let i = 0; i < data.length; i++) {
                        photoList.push({
                            id: data[i].id,
                            description: data[i].description,
                            urlfull: data[i].urls.full,
                            urlregular: data[i].urls.regular,
                            urlthumb: data[i].urls.thumb,
                            likes: data[i].likes,
                            width: data[i].width,
                            height: data[i].height,
                        })
                    }
                    setPhotos(photoList);
                });
        }
    }

    return (
        <div className="search">
            <div className='input__container'>
                <TextField className='input' id="photos" label="Photos" value={input} onChange={e => setInput(e.target.value)} />
                <div className='button' onClick={doSearch}><SearchIcon />SEARCH</div>
            </div>
            <div className='photos__container'>
                {images.map((obj) => (
                    <Photo id={obj.id}
                        description={obj.description}
                        urlfull={obj.urls.full}
                        urlregular={obj.urls.regular}
                        urlthumb={obj.urls.thumb}
                        likes={obj.likes}
                        width={obj.width}
                        height={obj.height} />
                ))}
            </div>
        </div>
    );
}

export default Search;
