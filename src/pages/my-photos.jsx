import React, { useState, useEffect } from 'react';

import TextField from '@mui/material/TextField';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import Photo from '../components/photo';
import "../styles/_my-photos.scss"

const MyPhotos = () => {

    const [photos, setPhotos] = useState(localStorage.getItem("items-photos") ? JSON.parse(localStorage.getItem("items-photos")) : []);
    const [description, setDescription] = useState("");
    const [option, setOption] = useState("");
    const [order, setOrder] = useState(true);

    const changeOption = (event: SelectChangeEvent) => {
        setOption(event.target.value);
    };

    useEffect(() => {
        if (description === "") {
            setPhotos(JSON.parse(localStorage.getItem("items-photos")));
        } else {
            const photolist = (JSON.parse(localStorage.getItem("items-photos"))).filter((obj) => {
                if (typeof obj.description === "string" && obj.description.toLowerCase().includes(description)) {
                    return obj;
                }
            });
            setPhotos(photolist);
            console.log(option);
        }
        setPhotos(orderPhotos(option));

    }, [description, option, order]);

    const changeOrder = () => {
        setOrder(!order);
    }

    const orderPhotos = (type) => {
        const array = photos.map((obj) => {
            return obj
        });

        switch (type) {
            case "Date":
                return array.sort((a, b) => {
                    return (order ? (new Date(a.date) - new Date(b.date)) : (new Date(b.date) - new Date(a.date)));
                })
            case "Width":
                return array.sort((a, b) => {
                    return (order ? (a.width - b.width) : (b.width - a.width));
                })
            case "Height":
                return array.sort((a, b) => {
                    return (order ? (a.height - b.height) : (b.height - a.height));
                })
            case "Likes":
                return array.sort((a, b) => {
                    return (order ? (a.likes - b.likes) : (b.likes - a.likes));
                })
            default: {
                return array;
            }
        }
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
                {photos.map((obj) => (
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
