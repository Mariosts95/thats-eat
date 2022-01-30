import { useEffect } from 'react';
import { UseShoppingCart } from '../store/ShoppingCartProvider';
import { useNavigate } from 'react-router-dom';

import { getRandomInt } from '../helpers/RandomNumber';

import './CompleteOrder.scoped.scss';

const Complete = () => {
  const { shoppingCart, emptyCart } = UseShoppingCart();

  const navigate = useNavigate();

  useEffect(() => {
    if (shoppingCart.items.length === 0) navigate('/');
    setTimeout(() => {
      navigate('/');
      emptyCart();
    }, 5 * 1000);
  }, []);

  return (
    <div className='complete-container'>
      <h1>
        Your order #{getRandomInt(1000, 9999)} was completed successfully!
      </h1>
      <p>You will be redirected to home page in a few seconds.</p>
    </div>
  );
};

export default Complete;
