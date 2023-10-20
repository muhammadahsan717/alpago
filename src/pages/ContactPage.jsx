import React, { Fragment } from 'react';
import { Form } from 'antd';

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!'
    }
};

const onFinish = (values) => {
    console.log('Success', values);
}

function ContactPage() {
    return (
        <Fragment>
            <div className='GetAQuote-main'>
                <div className="container">
                    <div className='ContactPage-Content'>
                        <div className='ContactPage-Content-Main'>
                            <h2>Get A Quote</h2>
                            <div className='ContactPage-form'>
                                <Form
                                    name="nest-messages"
                                    validateMessages={validateMessages}
                                    onFinish={onFinish}
                                >
                                    <Form.Item
                                        name={['Name']}
                                        rules={[
                                        {
                                            required: true,
                                        },
                                        ]}
                                    >  
                                        <input placeholder="Name" aria-required="true" type="text" value="Name"/>                                      
                                    </Form.Item>
                                    <Form.Item
                                        name={['Email']}
                                        rules={[
                                        {
                                            type: 'email',
                                            required: true
                                        },
                                        ]}
                                    >
                                        <input placeholder='Email'/>
                                    </Form.Item>
                                    <Form.Item 
                                        name={['Contact']} 
                                        rules={[
                                        {
                                            required: true,
                                        },
                                        ]}
                                    >
                                        <input placeholder='Contact'/>
                                    </Form.Item>
                                    <Form.Item name={['Message']} rules={[
                                        {
                                            required: true,
                                        },
                                        ]}>
                                        <textarea rows={4} placeholder='Message'/>
                                    </Form.Item>
                                    <Form.Item>
                                        <button type="primary" className='contactPage-main-button'>Submit</button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default ContactPage;