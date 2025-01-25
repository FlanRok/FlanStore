import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCart } from '../redux/actions/productActions';
import { saveToLocalStorage } from './localStorage';
import '../Styles/Cart.css';

const Cart = () => {
  const cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    const updatedCart = [...cart];
    const index = updatedCart.findIndex((item) => item.id === productId);
    if (index !== -1) {
      if (updatedCart[index].quantity > 1) {
        updatedCart[index].quantity -= 1;
      } else {
        updatedCart.splice(index, 1);
      }
    }
    dispatch(updateCart(updatedCart));
  };


  useEffect(() => {
    saveToLocalStorage('cart', cart);
  }, [cart]);

  if (cart.length === 0) {
    return <p className="cart-empty">Ваша корзина пуста!</p>;
  }

  return (
    <div className="cart">
      <h1>Ваша корзина</h1>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p>{item.price} руб.</p>
              <p>Количество: {item.quantity}</p>
            </div>
            <button
              className="remove-button"
              onClick={() => handleRemove(item.id)}
            >
              Удалить
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
