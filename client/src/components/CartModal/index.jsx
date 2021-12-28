import React from 'react';
import { createPortal } from 'react-dom';

import Modal from '@mui/material/Modal';
import { UseShoppingCart } from '../../store/ShoppingCartProvider';
import ProductCard from '../ProductCard';

import './CartModal.scoped.scss';

export default function CartModal() {
  const { shoppingCart, removeFromCart, openCart, closeCart, open } =
    UseShoppingCart();

  if (shoppingCart.length === 0) return null;

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
            {shoppingCart.map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                name={item.name}
                description={item.description}
                imgPath={item.imgPath}
                imgAlt={item.imgAlt}
                price={item.price}
                cart
                onClick={() => {
                  removeFromCart(item);
                }}
              />
            ))}
          </div>
        </div>
      </Modal>
    </div>,
    document.getElementById('cart')
  );
}
