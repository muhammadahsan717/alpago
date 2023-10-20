import React, { Fragment, useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Homepage from './Homepage';
import AboutPage from './AboutPage';
import CompletedProjectsPage from './CompletedProjectsPage';
import Navbar from '../components/MainPage/Navbar';
import Footer from '../components/MainPage/Footer';
import UnderConstructPage from './UnderConstructPage';
import ContactPage from './ContactPage';
import ServicePage from './ServicePage';

function MainPage() {

    const [swiper, setSwiper] = useState(null);
    const swiperRef = useRef(null);

    const slideToSection = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) 
        {
            swiperRef.current.swiper.slideTo(index);
        }
    };

    const goNext = () => {
        if (swiper) {
            swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiper) {
            swiper.slidePrev();
        }
    };

    useEffect(() => {
        if (swiper) 
        {
            swiper.on('slideChange', () => {
                slideToSection(swiper.activeIndex);
            });
        }
    }, [swiper]);

    return (
        <Fragment>
            <div className='MainPage'>
                <Navbar slideToSection={slideToSection} />
                <div className='MainpageComponents'>
                    <div className='mainpage-swiper'>
                        <div className="swiper-button-prev goPrev" onClick={goPrev}></div>
                        <Swiper className='swiper-mainss' style={{width: '100%'}}
                            ref={swiperRef}
                            onSwiper={setSwiper}
                            autoplay={true}
                            keyboard={true}           
                            scrollbar={true}
                            zoom={true}
                            direction='vertical'
                        >   
                            <SwiperSlide><Homepage /></SwiperSlide>
                            <SwiperSlide><AboutPage /></SwiperSlide>
                            <SwiperSlide><CompletedProjectsPage /></SwiperSlide>
                            <SwiperSlide><UnderConstructPage /></SwiperSlide>
                            <SwiperSlide><ServicePage /></SwiperSlide>
                            <SwiperSlide><ContactPage /></SwiperSlide>
                        </Swiper>
                        <div className="swiper-button-next goNext" onClick={goNext}></div>
                    </div>
                </div>
                <Footer slideToSection={slideToSection} />
            </div>
        </Fragment>
    ) 
}

export default MainPage;