import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Register.css';
const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');

    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

    }



    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder="your Name" />
                <br />
                <input type="email" name="email" id="" placeholder='your Email address' required />
                <br />
                <input type="password" name="password" id="" placeholder='password' required />
                <input type="submit" value="Register" />

            </form>

            <p>New to genius car <span className='text-danger' onClick={navigateLogin}>
                Please Login</span></p>
        </div>
    );
};

export default Register;