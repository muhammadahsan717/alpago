import React, {useState} from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { Input } from 'antd';
import UploadBackground from '../components/UploadBackground'
import { Offcanvas } from 'bootstrap';
import sidebarImg from '../assets/images/Vector Smart Object.png'

const { TextArea } = Input;

function About() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='Home-main'>
            <div className='outside-dash'>
                <Sidebar data='ABOUT'/>
            </div>

            {/* <div className='dash-offcanvas'>
                <i className="fa fa-bars" aria-hidden="true" onClick={handleShow} style={{ color: 'white', fontSize: '36px' }}></i>
                <img src={sidebarImg} alt='sidebar' className='sidebar-images' />
                <Offcanvas show={show} onHide={handleClose} backdrop={false} placement="end">
                    <Offcanvas.Header closeButton />
                <   Sidebar data='ABOUT' />
                </Offcanvas>
            </div> */}
            <div className='inside-home'>
                <div className='form-home-heading'>
                    <div className='multiple-form'>
                        <div className='multiple-form-text'>
                            <p className='form-text-main-headings'>EDIT ABOUT PAGE</p>
                        </div>
                        <div>
                            <UploadBackground />
                        </div>
                    </div>
                </div> 

                <div className='about-textarea'>
                    <TextArea rows={4} style={{height: '1000px'}} initialValues={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sint eveniet molestiae consequatur explicabo aut voluptatem ducimus ipsa nobis magnam, dolorem laborum repellendus in ullam maiores sit, reprehenderit autem cum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, illo sunt, hic quidem necessitatibus perferendis sapiente dolore quod neque pariatur, non consectetur? Minus, vel eligendi omnis fugiat non iure sint.'}/>
                </div>

                <div className='form-buttons'>
                    <p className='form-button-save'>SAVE</p>
                </div>

            </div>    
        </div>
    )
}

export default About