import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';

// Import Styles
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../css/Landing.css';

// Image Imports
import ChatBotImg from '../images/ChatBot.jpg';
import CyberImg from '../images/Cyber.jpg'
import RPAImg from '../images/RPAImg.jpg'

export default function Landing() {
    const [currentSlide, setCurrentSlide] = useState(0); // Track the active slide

    const slides = [
        { id: 0, img: `${ChatBotImg}`, heading: "Our Chatbots and Virtual Assistants" },
        { id: 1, img: `${CyberImg}`, heading: "Robotic Process Automation" },
        { id: 2, img: `${RPAImg}`, heading: "Cyber Security" },
    ];

    return (
        <div className='landing-carousel-container'>
            <Carousel
                showArrows={true}
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                interval={5000}
                onChange={(index) => setCurrentSlide(index)} // Update current slide index
            >
                {slides.map((slide) => (
                    <div key={slide.id} className='carousel-slide'>
                        <img src={slide.img} alt={`Slide ${slide.id}`} className='carousel-image' />
                        <div
                            className={`slide-heading-container ${
                                currentSlide === slide.id ? "fade-in" : ""
                            }`}
                        >
                            <h1 className='slide-heading-text'>    {slide.heading}</h1>

                            <div className="slider-btn-container">
                                <a href='#' className='btn primary-btn'>Learn More</a>
                                <a href='#' className='btn secondary-btn'>Contact Now</a>
                            </div>
                        
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
