import React from 'react';
import './landingPage.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import Header from '../header/header.module';
import CarouselFade from '../Carousel/carousel.module';


function LandingPage() {
    return (
        <>
            {/* <div className="page-container">
                <div className="background-image">
                </div>
                <div className='smallLogo d-lg-none'>
                    <img src="/images/logo.svg" />
                </div>
                <div className='biglogo d-none d-lg-block'>
                    <img src="/images/logo.svg" />
                </div>
                <div className="content">
                    <h1 className='p1'>Discover the world with spsv travels</h1>
                    <button onClick={() => window.location.href = '/home'} className="transparent-button">Explore</button>
                </div>
                <div className="social-icons">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                </div> */}
                


            {/* </div> */}




            <Header />
                <CarouselFade />

        </>
    )
}
export default LandingPage;