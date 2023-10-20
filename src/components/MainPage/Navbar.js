import React, { useState, Fragment } from 'react';
import mainImage from '../../assets/images/Vector Smart Object.png';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Navbar({ slideToSection }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Fragment>
            <div className="Navbar-main fixed-top">
                <div className="Navbar-main-Image">
                    <div className='navbar-button'>
                        <button className='mobilemenu' onClick={handleShow}>Menu</button>

                        <Offcanvas show={show} onHide={handleClose}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>AL PAGO Construction</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <ul>
                                    <li onClick={() => slideToSection(0)}>HOME</li>
                                    <li onClick={() => slideToSection(1)}>ABOUT</li>
                                    <li onClick={() => slideToSection(2)}>COMPLETED PROJECTS</li>
                                    <li onClick={() => slideToSection(3)}>UNDER CONSTRUCTION</li>
                                    <li onClick={() => slideToSection(4)}>SERVICES</li>
                                    <li onClick={() => slideToSection(5)}>GET A QUOTE</li>
                                </ul>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </div>
                    <div className="Navbar-main-Image-div">
                        <img src={mainImage} alt="Main" />
                    </div>
                </div>
            </div>
        </Fragment>
 
    );
}

export default Navbar;
