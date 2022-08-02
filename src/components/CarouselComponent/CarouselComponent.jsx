import React, {useState, useEffect} from 'react'

import {
    slides
} from './slides';

import './CarouselComponent.css'

const CarouselComponent = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slideLength = slides.length;
    const autoScroll = true;
    let slideInterval;

    //Slides Animation
    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
    }

    //Set Interval Function
    const autoSlider = () => {
        slideInterval = setInterval(nextSlide, 5000)
    }

    //Set currentSlide to 0 when refresh page
    useEffect(() => {
        setCurrentSlide(0);
    }, [])

    //Auto function call
    useEffect(() => {
        if(autoScroll) {
            autoSlider();
        }

        //Cleanup function 
        return () => clearInterval(slideInterval)
    }, [currentSlide])

    return (
        <div className='slider'>
            <div>
                <div className='left-arrow' onClick={prevSlide}>◀</div>
                <div className='right-arrow' onClick={nextSlide}>▶</div>
            </div>
            
            {slides.map((slide, index) => (
                <div className={index === currentSlide ? 'slide current' : 'slide'} key={index}>
                    {index === currentSlide && (
                        <img src={slide.url} alt="slide" />
                    )}
                </div>
            ))}

        </div>
    )
}

    
export default CarouselComponent;