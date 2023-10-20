import React from 'react';
import { Form, Input } from 'antd';
    
const FormUpload = () => {
    const [form] = Form.useForm();
    return (
        <Form form={form} name="validateOnly"  autoComplete="off">
        <Form.Item
            name="MAIN HEADING"
            rules={[
            {
                required: true
            },
            ]}
        >
            <Input defaultValue='MAIN HEADING'/>
        </Form.Item>
        <Form.Item
            name="SUB HEADING"
            rules={[
            {
                required: true,
            },
            ]}
        >
            <Input defaultValue='SUB HEADING'/>
        </Form.Item>
        <Form.Item className='form-button' name='Save Button'>
            <p className='form-button-save'>SAVE</p>
        </Form.Item>
        </Form>
    );
};
export default FormUpload;