import React from 'react';
function Footer({ slideToSection }) {
    return (
        <div className='Footer-main fixed-bottom'>
            <div className='Footer-main-list'>
                <ul>
                    <li onClick={() => slideToSection(0)}>HOME</li>
                    <li onClick={() => slideToSection(1)}>ABOUT</li>
                    <li onClick={() => slideToSection(2)}>COMPLETED PROJECTS</li>
                    <li onClick={() => slideToSection(3)}>UNDER CONSTRUCTION</li>
                    <li onClick={() => slideToSection(4)}>SERVICES</li>
                    <li onClick={() => slideToSection(5)}>GET A QUOTE</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
