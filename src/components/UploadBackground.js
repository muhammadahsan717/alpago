import React from 'react'
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import iconn from '../assets/images/Add Image Icon.png'


const props = {
    name: 'file',
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') 
        {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') 
        {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') 
        {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};
function UploadBackground() {
    return (
        <div className='multiple-in'>
            <p className='multiple-in-p'>BACKGROUND IMAGE</p>
            <div className='multiple-in-icon'>
                <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>

                <img src={iconn} alt='addIcon' className='addIcon'/>
            </div>
            <div >
                <p className='form-button-saves'>SAVE</p>
            </div>
        </div> 
    )
}

export default UploadBackground;