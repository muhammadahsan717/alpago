import React, {useState} from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import sidebarImg from '../assets/images/Vector Smart Object.png'
import Sidebar from '../components/Sidebar/Sidebar';
import UploadBackground from '../components/UploadBackground';
import CompletedProjectsList from '../components/CompletedProjects/CompletedProjectsList';

function CompletedProjects() {
    const [shows, setShows] = useState(true);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const updateMessage = (newMessage) => {
        setShows(newMessage);
    };

    const CompletedProjectsListData = [
        {
            names: 'location name',
            imagesNo: 20,
            videosNo: 0 
        },
        {
            names: 'avancera name',
            imagesNo: 9,
            videosNo: 1 
        },
        {
            names: 'alpago',
            imagesNo: 3,
            videosNo: 10 
        },
        {
            names: 'headshot ai',
            imagesNo: 15,
            videosNo: 0 
        },
        {
            names: 'salaam takaful',
            imagesNo: 100,
            videosNo: 50
        }
    ];

    return (
        <div className='Home-main'>
            <div className='outside-dash'>
                <Sidebar data='COMPLETED PROJECTS'/>
            </div>

            <div className='dash-offcanvas'>
                <i class="fa fa-bars" aria-hidden="true" onClick={handleShow} style={{color: 'white', fontSize: '36px'}}></i>
                    <img src={sidebarImg} alt='sidebar' className='sidebar-images'/>
                <Offcanvas show={show} onHide={handleClose} scroll={true}>
                    <Offcanvas.Header closeButton/>
                    <Sidebar data='COMPLETED PROJECTS'  />
                </Offcanvas>
            </div>
            <div className='inside-home'>
                <div className='form-home-heading'>
                    <div className='multiple-form'>
                        <div className='multiple-form-text'>
                            {shows ? (
                                <> 
                                    <div>
                                        <p className='form-text-main-headings'>COMPLETED PROJECTS</p>
                                    </div>
                                    <div className='service-form-p'>
                                        <p>ADD NEW</p>
                                    </div>
                                </>
                            ): (
                                <>
                                    <div>
                                        <p className='form-text-main-headings'>EDIT COMPLETED PROJECTS</p>
                                    </div>
                                </>
                            )}
                        </div>
                        {shows ? (
                            <div>
                                <UploadBackground />
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </div> 

                <div className='about-text-area'>
                    <CompletedProjectsList data={CompletedProjectsListData} updateMessage={updateMessage}/>
                </div>

            </div>
        </div>
    )
}

export default CompletedProjects