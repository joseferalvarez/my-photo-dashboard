import React from 'react';
import { useState, useEffect } from 'react';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "../styles/_slider.scss"

const Slider = () => {

    const [index, setIndex] = useState(0);

    const [photos, setPhotos] = useState({
        photo1: "https://images.unsplash.com/photo-1664825557836-2e1f6e72ce99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
        photo2: "https://images.unsplash.com/photo-1664737426331-a1cde6c831d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80",
        photo3: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1337&q=80",
        photo4: "https://images.unsplash.com/photo-1563889958749-625da26ed355?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        photo5: "https://images.unsplash.com/photo-1634225309345-b6b49528bcf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    });

    const slides = document.getElementsByClassName("slider__img");
    const buttons = document.getElementsByClassName("slider__button");

    const getRandomPhotos = () => {
        const photosSlider = [];

        fetch(`${process.env.REACT_APP_API_RANDOM}?client_id=${process.env.REACT_APP_CLIENT_ID}&count=5`)
            .then(response => {
                return response.json();
            }).then(data => {
                for (let i = 0; i < data.length; i++) {
                    photosSlider.push(data[i].urls.regular);
                }
                setPhotos({
                    photo1: photosSlider[0],
                    photo2: photosSlider[1],
                    photo3: photosSlider[2],
                    photo4: photosSlider[3],
                    photo5: photosSlider[4]
                });
            });
    }

    const nextSlide = () => {
        setIndex(index + 1);
        if (index >= 4) {
            setIndex(0);
        }
    }

    const backSlide = () => {
        setIndex(index - 1);
        if (index <= 0) {
            setIndex(4);
        }
    }

    useEffect(() => {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            buttons[i].classList.remove("slider__button-active");
        }

        slides[index].style.display = "block";
        buttons[index].classList.add("slider__button-active");
    });

    return (
        <div id="slider" className="slider">
            <img className="slider__img slider__img-active" src={photos.photo1} alt="" />
            <img className="slider__img" src={photos.photo2} alt="" />
            <img className="slider__img" src={photos.photo3} alt="" />
            <img className="slider__img" src={photos.photo4} alt="" />
            <img className="slider__img" src={photos.photo5} alt="" />
            <div className="arrow arrow-right" onClick={nextSlide}><ArrowForwardIosIcon className='arrow__icon' /></div>
            <div className="arrow arrow-left" onClick={backSlide}><ArrowBackIosIcon className='arrow__icon arrow__icon-left' /></div>

            <div className="slider__button__container">
                <div className="slider__button__list">
                    <button className="slider__button slider__button-active" onClick={() => setIndex(0)}></button>
                    <button className="slider__button" onClick={() => setIndex(1)}></button>
                    <button className="slider__button" onClick={() => setIndex(2)}></button>
                    <button className="slider__button" onClick={() => setIndex(3)}></button>
                    <button className="slider__button" onClick={() => setIndex(4)}></button>
                </div>
            </div>
            <button onClick={getRandomPhotos}>random</button>
        </div>
    );
}

export default Slider;
