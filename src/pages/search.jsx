import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApiPhotos } from '../features/search/searchSlice';
import Photo from '../components/photo';

import SearchIcon from '@mui/icons-material/Search';
import { CircularProgress, TextField } from '@mui/material';

import "../styles/_search.scss";

const Search = () => {

    const dispatch = useDispatch();
    const { images } = useSelector((state) => state.searchImages);

    const [query, setQuery] = useState("");
    const [searching, setSearching] = useState(false);

    const doSearch = () => {
        setSearching(true);

        setTimeout(() => {
            dispatch(getApiPhotos(query));
            setSearching(false);
        }, 0);
    }

    return (
        <div className="search">
            <div className='input__container'>
                <TextField className='input' id="photos" label="Photos" value={query} onChange={e => setQuery(e.target.value)} />
                <div className='button' onClick={doSearch}><SearchIcon />SEARCH</div>
            </div>
            {searching && <div className='progress'>
                <CircularProgress />
            </div>}
            <div className='photos__container'>
                {!searching && images.map((obj) => (
                    <Photo key={obj.id} id={obj.id}
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
