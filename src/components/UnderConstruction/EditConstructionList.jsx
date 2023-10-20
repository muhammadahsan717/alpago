import React from 'react';
import imgIcon from '../../assets/images/Medium Icons.png'

function EditConstructionList({data}) {
    const myArray = new Array(5).fill();
    
    return (
        <div>
            <div  className='detailsss'>
                <div className='detailsss-name-list'>
                    <p>{data.names}</p>
                </div>
            </div>
            <div className='detailsss abc'>
                <div className='detailsss-image-video'>
                    <p>IMAGES - {data.imagesNo}</p>
                </div>
            </div>
            <div className='detailsss-imgIcon'>
                <div className='imgIcon-inside'>
                    {myArray.map((datas, i) => (
                        <div key={i} className='detailsss-img-box-outside'>
                            <div className='detailsss-img-box'>
                                <img src={imgIcon} alt='mediumIcon' className='mediumIconStyle'/>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='details-img-box-outside'>
                    <div className='detailsss-img-box'>
                        <p className='detailsss-img-box-addIcon'>+</p>
                    </div>
                </div>
            </div>

            <div className='detailsss'>
                <div className='detailsss-image-video'>
                    <p>VIDEOS - {data.videosNo}</p>
                </div>
            </div>
            <div className='detailsss-vidIcon'>
                <div className='detailsss-vid-box'>
                    <p>youtube.com/myvideo</p>
                </div>

                <div className='details-img-box-outside'>
                    <div className='detailsss-img-box'>
                        <p className='detailsss-img-box-addIcon'>+</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditConstructionList