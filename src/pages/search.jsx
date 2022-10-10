import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Photo from '../components/photo';
import SearchIcon from '@mui/icons-material/Search';
import "../styles/_search.scss";

import { getApiPhotos } from '../features/search/searchSlice';
import { useDispatch, useSelector } from 'react-redux';

const Search = () => {

    const dispatch = useDispatch();
    const { images } = useSelector((state) => state.imagesStore);
    const [query, setQuery] = useState("");

    const doSearch = () => {
        dispatch(getApiPhotos(query));
    }


    return (
        <div className="search">
            <div className='input__container'>
                <TextField className='input' id="photos" label="Photos" value={query} onChange={e => setQuery(e.target.value)} />
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
