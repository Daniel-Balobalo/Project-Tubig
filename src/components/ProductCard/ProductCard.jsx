// src/components/ProductCard/ProductCard.jsx
import React from 'react';
import './ProductCard.css';

function ProductCard({ name, price }) {
    return (
        <div className="product-card">
            <img src="product1.jpg" alt={name} />
            <h3>{name}</h3>
            <p>{price}</p>
            <button>Add to Cart</button>
        </div>
    );
}

export default ProductCard;