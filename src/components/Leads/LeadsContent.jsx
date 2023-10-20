import React from 'react';


function LeadsContent({data, handleClose}) {
    return (
        <div>
                 
            <div className='detailsss'>
                <div className='detailssssssss-name'>
                    <p>{data.names}</p>
                    <i className="fa fa-times" aria-hidden="true" onClick={() => handleClose()}></i>
                </div>
            </div>

            <div className='detailsss abc'>
                <div className='detailsssss-emails'>
                    <p>{data.email}</p>
                </div>
            </div>

            <div className='detailsss abc'>
                <div className='detailssssssss-name'>
                    <p>{data.contact}</p>
                </div>
            </div>
            <div className='detailsss abc'>
                <div className='detailssssssss-name'>
                    <p>{data.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default LeadsContent