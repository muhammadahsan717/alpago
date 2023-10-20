import React, {useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import CountUp from 'react-countup';
import Offcanvas from 'react-bootstrap/Offcanvas';
import sidebarImg from '../assets/images/Vector Smart Object.png'


function Dashboard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dashData = [
        {
            num: 43,
            desc: 'No of Under Construction Project'
        }, 
        {
            num: 144,
            desc: 'No of Completed Projects'
        }
    ];

    return (
        <div className='Dashboard-main'>
            <div className='outside-dash'>
                <Sidebar data='DASHBOARD'/>
            </div>

            <div className='dash-offcanvas'>
                <i class="fa fa-bars" aria-hidden="true" onClick={handleShow} style={{color: 'white', fontSize: '36px'}}></i>
                    <img src={sidebarImg} alt='sidebar' className='sidebar-images'/>
                <Offcanvas show={show} onHide={handleClose}>
                    <Sidebar data='DASHBOARD' closeButton/>
                </Offcanvas>
            </div>

            <div className='inside-dash'>
                <div className='inside-dash-box'>
                    {dashData.map((data, i) => (
                        <div className='dash-boxx'>
                            <p className='dash-box-num'><CountUp end={data.num} duration={8}/></p>
                            <p className='dash-box-desc'>{data.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Dashboard