import React from 'react';
import { MinusCircleOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 24,
      offset: 0,
    },
  },
};

const ServiceForm = () => {

    const onFinish = (values) => {
        console.log('Received values of form:', values);
    };

    return (
        <div className='Service-Form-Main'>
            <div className='service-form-upper'>

                <Form>
                <Form.Item
                    validateTrigger={['onChange', 'onBlur']}
                    noStyle
                    >
                    <Input
                        defaultValue='SERVICE NAME' style={{width: '80%'}}
                        />
                    </Form.Item>
                </Form>
            </div>
            <Form
                name="dynamic_form_item"
                {...formItemLayoutWithOutLabel}
                onFinish={onFinish}
            >
                <Form.List
                    name="names"
                >
                    {(fields, { add, remove }) => (
                    <>
                        {fields.map((field, index) => (
                        <Form.Item
                            required={false}
                            key={field.key}
                            style={{width: '100%'}}
                        >
                            <Form.Item
                            {...field}
                            validateTrigger={['onChange', 'onBlur']}
                            noStyle
                            >
                            <Input
                                defaultValue='SERVICE NAME' style={{width: '80%'}}
                            />
                            </Form.Item>
                                    <MinusCircleOutlined
                                    className="dynamic-delete-button"
                                    onClick={() => remove(field.name)}
                                />

                        </Form.Item>
                        ))}
                        
                        <div className='service-form-p' onClick={() => add()}>
                            <p  >ADD ANOTHER</p>
                        </div>

                    </>
                    )}
                </Form.List>
            </Form>

            <div className='forms-buttons-Service'>
                <div className='form-buttons'>
                    <p className='form-button-save'>SAVE</p>
                </div>
            </div>
        </div>
    );
};
export default ServiceForm;