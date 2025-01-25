import React from 'react';
import '../Styles/ProductCard.css';

const ProductCard = ({ product, onSelect }) => (
  <div className="product-card" onClick={() => onSelect(product)}>
    <img src={product.image} alt={product.name} className="product-image" />
    <div className="product-info">
      <h3>{product.name}</h3> 
      <p>{product.description || 'Описание товара скоро появится!'}</p>
      <p className="product-price">{product.price} руб.</p>
    </div>
  </div>
);

export default ProductCard;
