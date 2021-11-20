import React from 'react';
import ProductCard from '../components/ProductCard';
import { v4 as uuidv4 } from 'uuid';
import ShoppingCartProvider from '../store/ShoppingCartProvider';
import ShoppingCart from '../components/ShoppingCart';
import { UseShoppingCart } from '../store/ShoppingCartProvider';

import espressoImg from '../assets/images/espresso.png';
import freddoEspressoImg from '../assets/images/freddo-espresso.jpg';
import cappucinoImg from '../assets/images/cappuchino.webp';
import freddoCappucinoImg from '../assets/images/freddo-cappuccino.jpg';
const products = [
  {
    productId: 1,
    productName: 'Espresso',
    productDescription: '100% Arabica',
    productImg: espressoImg,
    productImgAlt: 'product',
  },
  {
    productId: 2,
    productName: 'Freddo Espresso',
    productDescription: '100% Arabica',
    productImg: freddoEspressoImg,
    productImgAlt: 'product',
  },
  {
    productId: 3,
    productName: 'Cappucino',
    productDescription: '100% Arabica',
    productImg: cappucinoImg,
    productImgAlt: 'product',
  },
  {
    productId: 4,
    productName: 'Freddo Cappucino',
    productDescription: '100% Arabica',
    productImg: freddoCappucinoImg,
    productImgAlt: 'product',
  },
];

const Home = () => {
  const { addToCart } = UseShoppingCart();
  return (
    <>
      <div>
        {products.map((item) => (
          <ProductCard
            key={uuidv4()}
            productId={item.productId}
            productName={item.productName}
            productDescription={item.productDescription}
            productImg={item.productImg}
            productImgAlt={item.productImgAlt}
            onClick={() => {
              addToCart(item);
            }}
          />
        ))}
      </div>
      <div style={{ margin: '50px 0 0' }}>
        <ShoppingCart />
      </div>
    </>
  );
};

export default Home;
