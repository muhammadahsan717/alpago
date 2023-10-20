import React, {useState} from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import sidebarImg from '../assets/images/Vector Smart Object.png'
import UploadBackground from '../components/UploadBackground'
import Sidebar from '../components/Sidebar/Sidebar';
import ServiceForm from '../components/Service/ServiceForm';
import ServiceImageUpload from '../components/Service/ServiceImageUpload';

function Service() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='Home-main'>
            <div className='outside-dash'>
                <Sidebar data='SERVICE'/>
            </div>

            <div className='dash-offcanvas'>
                <i class="fa fa-bars" aria-hidden="true" onClick={handleShow} style={{color: 'white', fontSize: '36px'}}></i>
                    <img src={sidebarImg} alt='sidebar' className='sidebar-images'/>
                <Offcanvas show={show} onHide={handleClose} scroll={true}>
                    <Offcanvas.Header closeButton/>
                    <Sidebar data='SERVICE'  />
                </Offcanvas>
            </div>

            <div className='inside-home'>
                <div className='form-home-heading'>
                    <div className='multiple-form'>
                        <div className='multiple-form-text'>
                            <p className='form-text-main-headings'>EDIT SERVICE PAGE</p>
                        </div>
                        <div>
                            <UploadBackground />
                        </div>
                    </div>
                </div> 

                <div className='about-textareas'>
                    <div className='Service-Form'>
                        <ServiceForm />
                    </div>
                    <div className='Service-Image-Form'>
                        <ServiceImageUpload />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Service