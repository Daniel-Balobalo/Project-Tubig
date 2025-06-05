// src/pages/Home.jsx
import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <div className="container">
            <h1>Welcome to PROJECT-TUBIG</h1>
            <button className="enter-button" onClick={() => navigate('/dashboard')}>
                Enter
            </button>
        </div>
    );
}

export default Home;