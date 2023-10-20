import React, { Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const servicess = [
    {
        data: 'renovation'
    },
    {
        data: 'designing'
    },
    {
        data: 'planning'
    },
    {
        data: 'construction'
    },
    {
        data: 'consultation'
    },
    {
        data: 'Demolition Services'
    }, 
    {
        data: 'Customization and Specialty Work'
    },
    {
        data: 'Landscaping and Site Development'
    },
    {
        data: 'Maintenance and Repairs'
    },
    {
        data: 'remodeling'
    },
    {
        data: 'advisory services'
    }
];

const brands = [
    {
        src: "https://picsum.photos/500/500?v1",
    },
    {
        src: "https://picsum.photos/500/500?v2",
    },
    {
        src: "https://picsum.photos/500/500?v8",
    },
    {
        src: "https://picsum.photos/500/500?v20",
    },
    {
        src: "https://picsum.photos/500/500?v3",
    }
];

function ServicePage() {
    return (
        <Fragment>
            <div className='ServicePage-main'>
                <div className="container">
                    <div className='ServicePage-main-content'>
                        <div className='ServicePage-services'>
                            <div>
                                <h2>Services</h2>
                            </div>
                            <div className='ServicePage-services-services'>
                                {servicess.map((dataa, indexx) => (
                                    <p key={indexx}>{dataa.data}</p>
                                ))}
                            </div>
                            <div className='ServicePage-services-services-swiper'>
                            <Swiper
                                modules={[Pagination, Autoplay]}
                                loop={true}
                                pagination={{ clickable: true }} // Enable pagination with clickable bullets
                                autoplay={{ delay: 3000 }} // Autoplay with a 3-second delay
                                slidesPerView={2}
                            >
                                {servicess.map((daata, indd) => (
                                    <SwiperSlide>
                                        <p key={indd}>{daata.data}</p>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            </div>
                        </div>
                        <div className='ServicePage-partners'>
                            <div>
                                <h2>Brands we are associated with</h2>
                            </div>
                            <div className='ServicePage-partners-partners'>
                                {brands.map((daata, indd) => (
                                    <img src={daata.src} key={indd} className='logosss'/>
                                ))}
                            </div>
                            <div className='ServicePage-partners-partners-swiper'>
                            <Swiper
                                modules={[Pagination, Autoplay]}
                                loop={true}
                                pagination={{ clickable: true }} // Enable pagination with clickable bullets
                                autoplay={{ delay: 3000 }} // Autoplay with a 3-second delay
                                slidesPerView={2}
                            >
                                {brands.map((daata, indd) => (
                                    <SwiperSlide>
                                        <img src={daata.src} key={indd} className='logosss'/>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default ServicePage;