import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../components/slider';

import "../styles/_home.scss"

const Home = () => {

    return (
        <div className='home'>
            <div className='home__data'>
                <h1 className='home__title'>Search, save and download your favorite images from unsplash!</h1>
                <h2 className='home__text'>All the images you need in one place</h2>
                <div className='home__button__container'>
                    <Link to="/search" className='button'>SEARCH</Link>
                </div>
            </div>
            <div className='slider__container'>
                <Slider className="slider" />
            </div>
        </div>
    );
}

export default Home;
