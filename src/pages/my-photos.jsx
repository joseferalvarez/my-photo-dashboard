import React, { useState, useEffect } from 'react';

import TextField from '@mui/material/TextField';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import Photo from '../components/photo';
import "../styles/_my-photos.scss"

import { useDispatch, useSelector } from 'react-redux';
import { orderBy } from '../features/favourites/favouritesSlice';

const MyPhotos = () => {

    const dispatch = useDispatch();
    const { favimages } = useSelector((state) => state.favourites);
    const [description, setDescription] = useState("");
    const [option, setOption] = useState("");
    const [order, setOrder] = useState(true);

    const changeOption = (event: SelectChangeEvent) => {
        setOption(event.target.value);
    };

    useEffect(() => {
        orderPhotos(option);
    });

    const changeOrder = () => {
        setOrder(!order);
    }

    const orderPhotos = (type) => {
        dispatch(orderBy(
            {
                type: type,
                order: order
            }
        ));
    }

    return (
        <div className='my-photos'>
            <div className='filters'>
                <TextField className='input' id="photos" label="Description" value={description} onChange={e => setDescription(e.target.value)} />
                <FormControl>
                    <InputLabel>Order by</InputLabel>
                    <Select className='select' label="Order by" value={option} onChange={changeOption}>
                        <MenuItem value={"Date"}>Date</MenuItem>
                        <MenuItem value={"Width"}>Width</MenuItem>
                        <MenuItem value={"Height"}>Height</MenuItem>
                        <MenuItem value={"Likes"}>Likes</MenuItem>
                    </Select>
                </FormControl>
                {order ? <SouthIcon onClick={changeOrder} /> : <NorthIcon onClick={changeOrder} />}
            </div>
            <div className='photos__container'>
                {favimages.map((obj) => (
                    <Photo id={obj.id}
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
    );
}

export default MyPhotos;
