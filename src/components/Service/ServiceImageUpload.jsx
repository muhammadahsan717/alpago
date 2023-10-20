import React, { useState } from 'react';
import { Upload } from 'antd';

const App = () => {
    const [fileList, setFileList] = useState([]);
    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };
    return (
        <div className='service-image-upload-form'>
            <Upload
                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                fileList={fileList}
                onChange={onChange}
                
            >
                <p className='add-logo-service-form'>ADD LOGO</p>
            </Upload>

            <div className='forms-buttons-Service'>
                <div className='form-buttons'>
                    <p className='form-button-save'>SAVE</p>
                </div>
            </div>
        </div>

    );
};
export default App;