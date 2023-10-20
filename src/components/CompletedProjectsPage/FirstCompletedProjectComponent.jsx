import React, { Fragment, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Controller } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

const files = [
    {
        src: "https://picsum.photos/1000/500?v1",
        type: 'image'
    },
    {
        src: "https://picsum.photos/1000/500?v2",
        type: 'image'
    },
    {
        src: "https://picsum.photos/1000/500?v8",
        type: 'image'
    },
    {
        src: "https://picsum.photos/1000/500?v20",
        type: 'image'
    },
    {
        src: "https://picsum.photos/1000/500?v3",
        type: 'image'
    },
    {
        src: "https://picsum.photos/1000/500?v4",
        type: 'image'
    },
    {
        src: 'https://www.youtube.com/embed/S3POgmS__qc?si=458HeAtGYzMZpYY1',
        src1: "https://picsum.photos/1000/500?v13",
        type: 'video'
    },
    {
        src: "https://picsum.photos/1000/500?v13",
        type: 'image'
    },
    {
        src: "https://picsum.photos/1000/500?v40",
        type: 'image'
    },
    {
        src: "https://picsum.photos/1000/500?v93",
        type: 'image'
    },
    {
        src: "https://picsum.photos/1000/500?v74",
        type: 'image'
    },
    {
        src: "https://picsum.photos/1000/500?v183",
        type: 'image'
    },
    {
        src: "https://picsum.photos/1000/500?v704",
        type: 'image'
    }
];

function FirstCompletedProjectComponent() {
    const [swiper, updateSwiper] = useState(null);
    const [swiperThumbs, updateSwiperThumbs] = useState(null);
    const [imageId, setImageId] = useState(0);
    const len=files.length;
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
        if (swiper && swiperThumbs) {
            swiper.controller.control = swiperThumbs;
            swiperThumbs.controller.control = swiper;
        }
    }, [swiper, swiperThumbs]);

    return (
        <Fragment>
            <div className='firstComp'>
                <Swiper {...params} getSwiper={updateSwiper} lazy={true} preloadImages={true}>
                    <SwiperSlide className='swiper-slide'>
                        {
                            files[imageId].type === 'image' ? (
                                <img
                                    src={files[imageId].src}
                                    loading='lazy'
                                    className="swiper-lazy alp"
                                />
                            ) : (
                                <iframe className="swiper-lazy alp" src={files[imageId].src} title="YouTube video player"></iframe>
                            )
                        }
                    </SwiperSlide>
                </Swiper>

                <Swiper {...thumbsParams} getSwiper={updateSwiperThumbs} className='thumbss'>
                    {files.map((image, ind) => (
                        <SwiperSlide className="swiper-slide-auto" key={ind}>
                            {
                                image.type === 'image' ? (
                                    <img
                                        src={image.src}
                                        key={image.src}
                                        className="swiper-lazy ahsan"
                                        onClick={() => setImageId(ind)}
                                    />
                                    
                                ) : (
                                    <img
                                        src={image.src1}
                                        key={image.src1}
                                        className="swiper-lazy ahsan"
                                        onClick={() => setImageId(ind)}
                                    />
                                )
                            }
                        </SwiperSlide>
                        
                    ))}
                </Swiper>
            </div>
        </Fragment>
    );
}

export default FirstCompletedProjectComponent;
