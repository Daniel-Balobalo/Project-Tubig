// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === '' || password === '') {
            alert('Please fill in all fields.');
        } else {
            alert('Login successful!');
            navigate('/dashboard');
        }
    };

    return (
        <div className="Login-Container">
            <h2>Login</h2>
            <div className="input-box">
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <label htmlFor="username">Username</label>
            </div>
            <div className="input-box">
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <label htmlFor="password">Password</label>
            </div>
            <button className="login-button" onClick={handleLogin}>
                Login
            </button>
            <a href="#" className="forgot-password">
                Forgot Password
            </a>
        </div>
    );
}

export default LoginPage;