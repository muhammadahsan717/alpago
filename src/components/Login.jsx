import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import background from '../assets/images/bg.png'
import sidebarLogo from '../assets/images/Vector Smart Object.png'
// import Sidebar from './Sidebar/Sidebar';
// import { AuthData } from '../config/auth/AuthWrapper';
// import 'antd/dist/antd.css';
function Login() 
{
    const navigate = useNavigate();
//     const {login} = AuthData();
//     const [formData, setFormData] = useReducer((formData, newItem) => {return({...formData, ...newItem})}, {userName: '', password: ''})    
//     const [errorMessage, setErrorMessage] = useState(null);
    
//     const doLogin = async () => {

//         try 
//         {     
//              await login(formData.userName, formData.password)
//             navigate("/dashboard")
//         } 
//         catch (error) 
//         {
//             setErrorMessage(error)
//         }
        
//    }

    const onFinish = values => {
        console.log('Received values of form: ', values);
        if(values.username === 'ahsan' && values.password === 'password'){
            navigate('/dashboard');
        }
        else{
            navigate('/login');
        }
    };

    return (
        <div className='login-main'>
            <div className='header-login' style={{backgroundImage: `url(${background})`}}>
                <p className='header-login-text'>Alpago</p>
                <img src={sidebarLogo}/>
            </div>
            <div className='inside-home'>
                <div className='form-home-heading'>
                    <div className='login-form-text'>
                        <p>Log In</p>
                    </div>
                    <div className='login-forms'>
                        <div className='login-forms-inside'>

                            <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: false,
                            }}
                            onFinish={onFinish}
                            >
                                <Form.Item
                                    name="username"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Username!',
                                    },
                                    ]}
                                    >
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Password!',
                                    },
                                ]}
                                >
                                    <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                    />
                                </Form.Item>

                                <Form.Item>
                                    
                                    <div className='forms-buttons-Service'>
                                        <div className='form-button'>
                                            <button type="primary" htmlType="submit" className="login-form-button form-button-save">
                                                Log In
                                            </button>
                                        </div>
                                    </div>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login