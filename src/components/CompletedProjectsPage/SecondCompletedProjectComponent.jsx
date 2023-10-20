import React, { Fragment, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Controller } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

const images = [
    {
        src: "https://picsum.photos/1000/500?v34"
    },
    {
        src: "https://picsum.photos/1000/500?v20"
    },
    {
        src: "https://picsum.photos/1000/500?v89"
    },
    {
        src: "https://picsum.photos/1000/500?v24"
    },
    {
        src: "https://picsum.photos/1000/500?v37"
    },
    {
        src: "https://picsum.photos/1000/500?v48"
    },
    {
        src: "https://picsum.photos/1000/500?v4"
    },
    {
        src: "https://picsum.photos/1000/500?v13"
    },
    {
        src: "https://picsum.photos/1000/500?v40"
    },
    {
        src: "https://picsum.photos/1000/500?v93"
    },
    {
        src: "https://picsum.photos/1000/500?v74"
    },
    {
        src: "https://picsum.photos/1000/500?v101"
    }
];

function SecondCompletedProjectComponent() {
    const [swiper, updateSwiper] = useState(null);
    const [swiperThumbs, updateSwiperThumbs] = useState(null);
    const [imageId, setImageId] = useState(0);
    const len = images.length;

    let params = {
        modules: [Controller],
        slidesPerView: 1,
        loop: true,
        spaceBetween: 30,
    };
    
    let thumbsParams = {
        modules: [Controller],
        slideToClickedSlide: true,
        breakpoints: {
            0:{
                slidesPerView: 2
            },
            480: {
                slidesPerView: 3
            },
            580: {
                slidesPerView: 4,
            },
            780:{
                slidesPerView: 5,        
            },
            992: {
                slidesPerView: 6,
            },
            1200: {
                slidesPerView: 7,
            },
            1440: {
                slidesPerView: 8,
            }
        },
        centeredSlides: false,
    };

    useEffect(() => {
        if (swiper && swiperThumbs) 
        {
            swiper.controller.control = swiperThumbs;
            swiperThumbs.controller.control = swiper;
            console.log(swiper, swiperThumbs)
        }
    }, [swiper, swiperThumbs]);

    return (
        <Fragment>
            <div className='firstComp'>
                <Swiper {...params} getSwiper={updateSwiper} lazy={true} preloadImages={true}>
                    <SwiperSlide className='swiper-slide'>
                        <img
                            src={images[imageId].src}
                            loading='lazy'
                            className="swiper-lazy alp"
                        />
                    </SwiperSlide>
                </Swiper>

                <Swiper {...thumbsParams} getSwiper={updateSwiperThumbs} className='thumbss'>
                    {images.map((image, ind) => (
                        <SwiperSlide className="swiper-slide-auto" key={ind}>
                            <img
                                src={image.src}
                                key={image.src}
                                className="swiper-lazy ahsan"
                                onClick={() => setImageId(ind)}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Fragment>
    );
}

export default SecondCompletedProjectComponent;
