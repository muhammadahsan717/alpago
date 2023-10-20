import React, {useState} from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import sidebarImg from '../assets/images/Vector Smart Object.png';
import Sidebar from '../components/Sidebar/Sidebar'
import UploadBackground from '../components/UploadBackground'
import LeadsList from '../components/Leads/LeadsList';

function Leads() {
    const [shows, setShows] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const updateMessage = (newMessage) => {
        setShows(newMessage);
        console.log(newMessage)
    };

    const CompletedProjectsListData = [
        {
            names: 'M. Ahsan',
            email: 'ahsan@gmail.com',
            contact: '+12 345 6789',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, iure veritatis nemo excepturi possimus in totam recusandae, quibusdam enim ratione porro debitis laborum cupiditate tempore aut aperiam minima soluta maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolore consequatur rem iure recusandae voluptates at totam. Sint corrupti quaerat deleniti saepe nam a, nobis molestiae maiores mollitia vel minus!'
        },
        {
            names: 'Hassan ali',
            email: 'hassan@gmail.com',
            contact: '+12 345 6789',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, iure veritatis nemo excepturi possimus in totam recusandae, quibusdam enim ratione porro debitis laborum cupiditate tempore aut aperiam minima soluta maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolore consequatur rem iure recusandae voluptates at totam. Sint corrupti quaerat deleniti saepe nam a, nobis molestiae maiores mollitia vel minus!'
        },
        {
            names: 'Umer Farooq',
            email: 'umer@yahoo.com',
            contact: '+12 345 6789',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, iure veritatis nemo excepturi possimus in totam recusandae, quibusdam enim ratione porro debitis laborum cupiditate tempore aut aperiam minima soluta maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolore consequatur rem iure recusandae voluptates at totam. Sint corrupti quaerat deleniti saepe nam a, nobis molestiae maiores mollitia vel minus!'
        },
        {
            names: 'M. Ahsan',
            email: 'ahsan@gmail.com',
            contact: '+12 345 6789',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, iure veritatis nemo excepturi possimus in totam recusandae, quibusdam enim ratione porro debitis laborum cupiditate tempore aut aperiam minima soluta maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolore consequatur rem iure recusandae voluptates at totam. Sint corrupti quaerat deleniti saepe nam a, nobis molestiae maiores mollitia vel minus!'
        },
        {
            names: 'Hassan ali',
            email: 'hassan@gmail.com',
            contact: '+12 345 6789',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, iure veritatis nemo excepturi possimus in totam recusandae, quibusdam enim ratione porro debitis laborum cupiditate tempore aut aperiam minima soluta maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolore consequatur rem iure recusandae voluptates at totam. Sint corrupti quaerat deleniti saepe nam a, nobis molestiae maiores mollitia vel minus!'
        },
    ];

    return (
        <div className='Home-main'>
            <div className='outside-dash'>
                <Sidebar data='LEADS'/>
            </div>

            <div className='dash-offcanvas'>
                <i className="fa fa-bars" aria-hidden="true" onClick={handleShow} style={{color: 'white', fontSize: '36px'}}></i>
                    <img src={sidebarImg} alt='sidebar' className='sidebar-images'/>
                <Offcanvas show={show} onHide={handleClose} scroll={true}>
                    <Offcanvas.Header closeButton/>
                    <Sidebar data='LEADS'  />
                </Offcanvas>
            </div>
            <div className={`${shows ? 'blur-background' : 'inside-home'}`}>
                {shows ? (<></>) : (
                    <div className='form-home-heading'>
                        <div className='multiple-form'>
                            <div className='multiple-form-text'>
                                <div>
                                    <p className='form-text-main-headings'>LEADS</p>
                                </div>
                            </div>
                            <div>
                                <UploadBackground />
                            </div>
                        </div>
                    </div> 
                )}

                <div className='about-text-area'>
                    <LeadsList data={CompletedProjectsListData} updateMessage={updateMessage}/>
                </div>

            </div>
        </div>
    );
}

export default Leads;