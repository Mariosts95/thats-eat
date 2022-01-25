import React from 'react';
import { createPortal } from 'react-dom';

import Modal from '@mui/material/Modal';
import { UseShoppingCart } from '../../store/ShoppingCartProvider';
import ProductCard from '../ProductCard';

import './CartModal.scoped.scss';

export default function CartModal() {
  const { shoppingCart, removeFromCart, openCart, closeCart, open } =
    UseShoppingCart();

  if (shoppingCart.items.length === 0) return null;

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
                product={product}
                cart
              />
            ))}
          </div>
          <h2>Total: {shoppingCart.total}</h2>
        </div>
      </Modal>
    </div>,
    document.getElementById('cart')
  );
}
