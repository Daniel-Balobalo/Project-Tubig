// src/pages/Dashboard.jsx
import React from 'react';
import '../App.css';
import ProductCard from '../components/ProductCard/ProductCard';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();

    return (
        <div>
            <header>
                <h1>Product Dashboard</h1>
                <button className="signup-button" onClick={() => navigate('/signup')}>
                    Sign Up
                </button>
            </header>
            <main>
                <div className="product-grid">
                    <ProductCard name="Product 1" price="₱00.00" />
                    <ProductCard name="Product 2" price="₱00.00" />
                    <ProductCard name="Product 3" price="₱00.00" />
                    <ProductCard name="Product 4" price="₱00.00" />
                </div>
            </main>
        </div>
    );
}

export default Dashboard;