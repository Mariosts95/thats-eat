import { useState, useEffect } from 'react';

// Context
import { UseShoppingCart } from '../../store/ShoppingCartProvider';

// Styles
import './ProductCard.scoped.scss';

const ProductCard = ({ cart, id, imgPath, product, storeId }) => {
  const { addToCart, removeFromCart, updateCartItem } = UseShoppingCart();

  const [amount, setAmount] = useState(product.amount ? product.amount : 1);

  // rerender everytime the amount changes
  useEffect(() => {}, [amount]);

  const { name, description, price } = product;

  return (
    <div className='product-card'>
      <div className='image'>
        <img src={imgPath} alt={description} />
      </div>
      <div className='info'>
        <h3 className='name'>{name}</h3>
        <p className='description'>{description}</p>
        <p className='price'>
          <span>{cart ? `${amount}x` : ''}</span>
          {price.toFixed(2)}€
        </p>
        <div className='quantity-container'>
          <input
            type='number'
            value={amount ? amount : ''}
            min={1}
            max={20}
            onChange={(e) => {
              setAmount(parseInt(e.currentTarget.value));
            }}
          />
          {cart && (
            <button
              className='update'
              onClick={() => {
                updateCartItem(id, amount);
              }}
            >
              Update
            </button>
          )}
          {cart ? (
            <button
              onClick={() => {
                removeFromCart(product._id);
              }}
            >
              Remove from cart
            </button>
          ) : (
            <button
              onClick={() => {
                addToCart(product, storeId, amount);
              }}
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
