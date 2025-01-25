import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/productActions';
import ProductCard from './ProductCard';

const ProductList = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleSelect = (product) => {
    dispatch(addToCart(product)); 
  };

  if (!Array.isArray(products)) {
    return <p>Загрузка данных...</p>;
  }

  return (
    <div>
      <h1 className="title">Добро пожаловать в FlanStore</h1>
      <p className="subtitle">
        У нас вы найдете лучшие товары для дома по отличным ценам!
      </p>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onSelect={handleSelect} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
