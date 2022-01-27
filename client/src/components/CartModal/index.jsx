import React from 'react';
import { createPortal } from 'react-dom';

import Modal from '@mui/material/Modal';
import { UseShoppingCart } from '../../store/ShoppingCartProvider';
import ProductCard from '../ProductCard';

import calcTotal from '../../helpers/calcTotal';

import './CartModal.scoped.scss';

export default function CartModal() {
  const { shoppingCart, closeCart, open } = UseShoppingCart();

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
          <h2>Total:{total}</h2>
        </div>
      </Modal>
    </div>,
    document.getElementById('cart')
  );
}
