import React from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';

// MUI
import Modal from '@mui/material/Modal';

// Context
import { UseShoppingCart } from '../../store/ShoppingCartProvider';

// Components
import ProductCard from '../ProductCard';

// Helper Functions
import calcTotal from '../../helpers/calcTotal';

// Styles
import './CartModal.scoped.scss';

export default function CartModal() {
  const { shoppingCart, closeCart, open } = UseShoppingCart();

  const navigate = useNavigate();

  // prevent opening the cart without items
  if (shoppingCart.items.length === 0) return null;

  const total = calcTotal(shoppingCart.items, 2);

  return createPortal(
    <div>
      <Modal
        open={open}
        onClose={closeCart}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <div className='shoping-cart'>
          <h2>Shoping Cart</h2>
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
              className='checkout'
              onClick={() => {
                navigate('/checkout');
                closeCart();
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      </Modal>
    </div>,
    document.getElementById('cart')
  );
}
