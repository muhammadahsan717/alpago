import React, { useState } from 'react'
import edit from '../../assets/images/Edit.png'
import deletes from '../../assets/images/Delete.png'
import EditConstructionList from './EditConstructionList'

function ProjectList({data, updateMessage}) {
    
    const [edits, setEdits] = useState(false);
    const [showw, setShoww] = useState(true);
    const [projects, setProjects] = useState(data);
    const [arraySize, setArraySize] = useState(projects.length - 1);
    const [selectedProject, setSelectedProject] = useState(null);

    if (!data || !Array.isArray(data)) 
    {
        console.log(data)
        return null;
    }

    const handleEditClick = (projectId) => {
        setEdits(true);
        updateMessage(false);
        setShoww(false);
        setSelectedProject(projects[projectId]);
    };

    // const handleViewClick = (projectId) => {

    // };

    const handleDeleteClick = (projectId) => {
        const updatedProjects = [...projects];
        updatedProjects.splice(projectId, 1);
        setProjects(updatedProjects);
        setArraySize(projects.length - 1)
    };

    const saveChange = () => {
        setEdits(false);
        setShoww(true);
        updateMessage(true);
    }
    
    return (
        <div className='CompletedProjectsList-mainss'>
            {arraySize > 0 ? (
                <div>
                    <div className='CompletedProjectsList-main'>
                        <div className='CompletedProjectsList-main-inside'>
                            {showw ? (
                                <>
                                    {projects.map((projectsList, i) => (
                                        <div key={i}>
                                            <div  className='detailsss'>
                                                <div className='detailsss-name'>
                                                    <p>{projectsList.names}</p>
                                                </div>
        
                                                <div className='detailsss-image-video'>
                                                    <p>{projectsList.imagesNo} IMAGES  -  {projectsList.videosNo} VIDEOS</p>
                                                </div>
        
                                                <div className='detailsss-icons-construction'>
                                                    <div>
                                                        <img
                                                            src={edit}
                                                            className='detailsss-iconsss'
                                                            alt='edit'
                                                            onClick={() => handleEditClick(i)}
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
            
                                            <div className='abc'> </div>
                                        </div>
                                    ))}
                                </>
                            ) : 
                            ( 
                                <>
                                    <EditConstructionList data={selectedProject}/>
                                </>
                            )}
                        </div>
                    </div>
                    { edits ? 
                        (                        
                            <div className='form-buttons-list' onClick={() => saveChange()}>
                                <p className='form-button-save'>SAVE</p>
                            </div> 

                        ) : (
                            <>
                            </>
                        )                        
                    }
                </div>
                
            ) : (<></>)}
        </div>
    );
}

export default ProjectList;