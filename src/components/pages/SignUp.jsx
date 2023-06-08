import React, { useState } from 'react';
import '../../App.css';
import { Form, Button } from 'react-bootstrap';
import { CustomButton } from '../CustomButton'

export default function SignUp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Email: ${email}, Password: ${password}, Confirm Password: ${confirmPassword}`);
    };

    return (
        <>
            <h1 className='sign-up'>Sign Up</h1>
            <div className='sign-up-form-wrapper'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail"  className='sign-up-form-item'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword"  className='sign-up-form-item'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} required />
                    </Form.Group>

                    <Form.Group controlId="formBasicConfirmPassword"  className='sign-up-form-item'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
                    </Form.Group>
                    <div className='sign-up-form-item sign-up-form-button'>
                        <CustomButton buttonStyle="btn--secondary" buttonSize="btn--large" type="submit">
                            Sign Up
                        </CustomButton>
                    </div>
                </Form>
            </div>
        </>
    );
}