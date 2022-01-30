import { useEffect } from 'react';
import { UseShoppingCart } from '../store/ShoppingCartProvider';
import { useNavigate } from 'react-router-dom';

import ProductCard from '../components/ProductCard';
import calcTotal from '../helpers/calcTotal';

import './Checkout.scoped.scss';

const Checkout = () => {
  const { shoppingCart } = UseShoppingCart();

  const navigate = useNavigate();

  useEffect(() => {
    if (shoppingCart.items.length === 0) navigate('/');
  }, []);

  const total = calcTotal(shoppingCart.items, 2);

  return (
    <div className='checkout-container'>
      <h2>Checkout:</h2>
      <div className='shoping-cart-list'>
        {shoppingCart.items.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            imgPath={`/src/assets/images/${shoppingCart.storeId}/${product._id}.jpg`}
            product={product}
            cart
          />
        ))}
      </div>
      <div className='bot'>
        <h2>Total: {total}€</h2>
        <button
          onClick={() => {
            navigate('/complete');
          }}
        >
          Complete Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
