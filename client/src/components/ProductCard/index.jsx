import { useState, useEffect } from 'react';
import { UseShoppingCart } from '../../store/ShoppingCartProvider';

// styles
import './ProductCard.scoped.scss';

const ProductCard = ({ cart, id, imgPath, product }) => {
  const { addToCart } = UseShoppingCart();

  const [amount, setAmount] = useState(product.amount ? product.amount : 1);

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
          <span>{cart ? `${amount}x` : ''}</span>€{price}
        </p>
        <div className='quantity-container'>
          <input
            type='number'
            value={amount ? amount : 1}
            min={1}
            max={20}
            onChange={(e) => {
              console.log(amount);
              setAmount(parseInt(e.currentTarget.value));
            }}
          />
          {cart && (
            <button
              onClick={() => {
                product.amount = amount;
                setAmount(product.amount);
              }}
            >
              Update
            </button>
          )}
          <button
            onClick={() => {
              product.amount = amount;
              addToCart(product);
              console.log(product);
            }}
          >
            {cart ? 'Remove from' : 'Add to'} cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
