// src/components/SignUpOptions/SignUpOptions.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpOptions.css';

function SignUpOptions() {
    const navigate = useNavigate();

    return (
        <div className="grid-container">
            <div className="grid-box">
                <h2>Create an Account</h2>
                <button onClick={() => navigate('/signup/create-account')}>
                    Sign Up
                </button>
            </div>
            <div className="grid-box">
                <h2>Login</h2>
                <button onClick={() => navigate('/login')}>
                    Login
                </button>
            </div>
        </div>
    );
}

export default SignUpOptions;