import React, { useState } from 'react'
import views from '../../assets/images/View.png'
import deletes from '../../assets/images/Delete.png'
import LeadsContent from './LeadsContent';

function LeadsList({data, updateMessage}) {
    
    const [projects, setProjects] = useState(data);
    const [arraySize, setArraySize] = useState(projects.length - 1);
    const [isBlurred, setIsBlurred] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    if (!data || !Array.isArray(data)) 
    {
        console.log(data)
        return null;
    }

    const handleViewClick = (projectId) => {
        updateMessage(true);
        setIsBlurred(true);
        setSelectedProject(projects[projectId]); // Set the selected project

    };

    const handleClose = () => {
        updateMessage(false);
        setIsBlurred(false);
    };

    const handleDeleteClick = (projectId) => {
        const updatedProjects = [...projects];
        updatedProjects.splice(projectId, 1);
        setProjects(updatedProjects);
        setArraySize(projects.length - 1);
        if(arraySize <= 1){
            updateMessage(false);
        }
    };
    
    return (
        <div className='CompletedProjectsList-mainss'>
            {arraySize > 0 ? (
                <div>
                    <div className='CompletedProjectsList-main'>
                        <div className='CompletedProjectsList-main-inside'>
                            {isBlurred ? (
                                <>
                                    <LeadsContent data={selectedProject} handleClose={handleClose}/>    
                                </>) : (
                                <>
                                    <div  className='detailsss-lead kiii'>
                                        <div className='detailsssss-name'>
                                            <p>NAME</p>
                                        </div>

                                        <div className='detailsssss-email'>
                                            <p>EMAIL</p>
                                        </div>

                                        <div className='detailsssss-contact'>
                                            <p>CONTACT</p>
                                        </div>

                                        <div className='detailsssss-icons'>
                                            <p>ACTIONS</p>
                                        </div>
                                    </div>

                                    {projects.map((projectsList, i) => (
                                        <div key={i}>
                                            <div className='abc'> </div>
                                            <div  className='detailsss-lead'>
                                                <div className='detailsssss-name'>
                                                    <p>{projectsList.names}</p>
                                                </div>

                                                <div className='detailsssss-emails'>
                                                    <p>{projectsList.email}</p>
                                                </div>

                                                <div className='detailsssss-contact'>
                                                    <p>{projectsList.contact}</p>
                                                </div>

                                                <div className='detailsssss-icons'>
                                                    <div>
                                                        <img
                                                            src={views}
                                                            className='detailsss-iconsss'
                                                            alt='view'
                                                            onClick={() => handleViewClick(i)}
                                                            />
                                                    </div>
                                                    <div>
                                                        <img
                                                            src={deletes}
                                                            className='detailsss-iconsss'
                                                            alt='dlt'
                                                            onClick={() => handleDeleteClick(i)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    ))}
                                </>
                            )}
                        </div>
                    </div>
                </div>
                
            ) : (<></>)}
        </div>
    );
}

export default LeadsList;