import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderBy, searchByDescription } from '../features/favourites/favouritesSlice';
import Photo from '../components/photo';

import { TextField, IconButton, Tooltip, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';

import '../styles/_my-photos.scss';

const MyPhotos = () => {

    const dispatch = useDispatch();
    const { favimages } = useSelector((state) => state.favImages);

    const [description, setDescription] = useState("");
    const [option, setOption] = useState("");
    const [order, setOrder] = useState(true);

    const changeOption = (event: SelectChangeEvent) => {
        setOption(event.target.value);
    };

    useEffect(() => {
        dispatch(searchByDescription(description));
        dispatch(orderBy(
            {
                type: option,
                order: order
            }
        ));
    }, [option, order, description, dispatch]);

    const changeOrder = () => {
        setOrder(!order);
    };

    return (
        <div className='my-photos'>
            <div className='filters'>
                <TextField className='input' id="photos" label="Description" value={description} onChange={e => setDescription(e.target.value)} />
                <FormControl className='select'>
                    <InputLabel>Order by</InputLabel>
                    <Select label="Order by" value={option} onChange={changeOption}>
                        <MenuItem value={"Date"}>Date</MenuItem>
                        <MenuItem value={"Width"}>Width</MenuItem>
                        <MenuItem value={"Height"}>Height</MenuItem>
                        <MenuItem value={"Likes"}>Likes</MenuItem>
                    </Select>
                </FormControl>
                {order ?
                    <Tooltip className='arrow' title="Ascending" arrow>
                        <IconButton onClick={changeOrder}>
                            <NorthIcon />
                        </IconButton>
                    </Tooltip> :
                    <Tooltip className='arrow' title="Descending" arrow>
                        <IconButton onClick={changeOrder}>
                            <SouthIcon />
                        </IconButton>
                    </Tooltip>}
            </div>
            <div className='photos__container'>
                <div className='photos'>
                    {favimages.map((obj) => (
                        <Photo key={obj.id}
                            id={obj.id}
                            description={obj.description}
                            urlfull={obj.urlfull}
                            urlregular={obj.urlregular}
                            urlthumb={obj.urlthumb}
                            likes={obj.likes}
                            width={obj.width}
                            height={obj.height}
                            date={obj.date}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MyPhotos;
