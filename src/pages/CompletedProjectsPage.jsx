import React, { Fragment, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import FirstCompletedProjectComponent from '../components/CompletedProjectsPage/FirstCompletedProjectComponent';
import SecondCompletedProjectComponent from '../components/CompletedProjectsPage/SecondCompletedProjectComponent';
import ThirdCompletedProjectComponent from '../components/CompletedProjectsPage/ThirdCompletedProjectComponent';

function CompletedProjectsPage() {
    const [swiperCompleted, setSwiperCompleted] = useState(null);

    const goNextCompleted = () => {
        if (swiperCompleted) {
            swiperCompleted.slideNext();
        }
    };

    const goPrevCompleted = () => {
        if (swiperCompleted) {
            swiperCompleted.slidePrev();
        }
    };
    return (
        <Fragment>
            <div className='Homepage-main'>
                <div className="container">
                        
                        <div className='CompletedProjectsPage-main'>
                            <div className="swiper-button-prev goPrevCompleted" onClick={goPrevCompleted}></div>

                            <Swiper
                                onSwiper={setSwiperCompleted}
                                className='completedSwiper'
                            >
                                <SwiperSlide><FirstCompletedProjectComponent /></SwiperSlide>
                                <SwiperSlide><SecondCompletedProjectComponent /></SwiperSlide>
                                <SwiperSlide><ThirdCompletedProjectComponent /></SwiperSlide>
                            </Swiper>
                            <div className="swiper-button-next goNextCompleted" onClick={goNextCompleted}></div>
                        </div>
                </div>
            </div>
        </Fragment>
    )
}
export default CompletedProjectsPage;