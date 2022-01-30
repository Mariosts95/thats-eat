import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import ProductCard from '../components/ProductCard';

// Context
import { UseShoppingCart } from '../store/ShoppingCartProvider';

// Helper Functions
import calcTotal from '../helpers/calcTotal';

// Styles
import './Checkout.scoped.scss';

const Checkout = () => {
  const { shoppingCart } = UseShoppingCart();

  const navigate = useNavigate();

  // check if cart has items else redirect to homepage
  useEffect(() => {
    if (shoppingCart.items.length === 0) navigate('/');
  }, []);
  // calculate the total from cart items and keep only 2 decimals
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
