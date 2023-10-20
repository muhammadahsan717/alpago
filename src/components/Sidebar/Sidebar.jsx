import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import background from '../../assets/images/bg.png'
import sidebarImg from '../../assets/images/Vector Smart Object.png'

function Sidebar({data}) {
    const navigate = useNavigate();
    const [activeItem, setActiveItem] = useState(data);

    return (
        <div className='Sidebar-main' style={{backgroundImage: `url(${background})`}}>
            <div className='sidebar-image-div'>
                <img src={sidebarImg} alt='sidebar' className='sidebar-image'/>
            </div>

            <div className='sidebar-list'>
                <div className='sidebar-list-inside'>
                    <p className={`sidebar-list-text ${activeItem === 'DASHBOARD' ? 'active' : ''}`} onClick={() => {navigate('/dashboard')}}>DASHBOARD</p>
                    <p className={`sidebar-list-text ${activeItem === 'HOME' ? 'active' : ''}`} onClick={() => {navigate('/home')}} >HOME</p>
                    <p className={`sidebar-list-text ${activeItem === 'ABOUT' ? 'active' : ''}`} onClick={() => {navigate('/about')}} >ABOUT</p>
                    <p className={`sidebar-list-text ${activeItem === 'SERVICE' ? 'active' : ''}`} onClick={() => {navigate('/service')}}>SERVICE</p>
                    <p className={`sidebar-list-text ${activeItem === 'COMPLETED PROJECTS' ? 'active' : ''}`} onClick={() => {navigate('/completed-projects') }} >COMPLETED PROJECTS</p>
                    <p className={`sidebar-list-text ${activeItem === 'UNDER CONSTRUCTION PROJECTS' ? 'active' : ''}`} onClick={() => {navigate('/under-construction-projects')}} >UNDER CONSTRUCTION PROJECTS</p>
                    <p className={`sidebar-list-text ${activeItem === 'LEADS' ? 'active' : ''}`} onClick={() => {navigate('/leads')}} >LEADS</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar