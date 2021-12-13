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
    id: 1,
    name: 'Espresso',
    description: '100% Arabica',
    imgPath: espressoImg,
    imgAlt: 'product',
    price: 1.6,
  },
  {
    id: 2,
    name: 'Freddo Espresso',
    description: '100% Arabica',
    imgPath: freddoEspressoImg,
    imgAlt: 'product',
    price: 1.8,
  },
  {
    id: 3,
    name: 'Cappucino',
    description: '100% Arabica',
    imgPath: cappucinoImg,
    imgAlt: 'product',
    price: 1.8,
  },
  {
    id: 4,
    name: 'Freddo Cappucino',
    description: '100% Arabica',
    imgPath: freddoCappucinoImg,
    imgAlt: 'product',
    price: 2,
  },
];

const ProductsList = () => {
  const { addToCart } = UseShoppingCart();
  return (
    <>
      <div>
        {products.map((item) => (
          <ProductCard
            key={uuidv4()}
            id={item.productId}
            name={item.name}
            description={item.description}
            imgPath={item.imgPath}
            imgAlt={item.imgAlt}
            price={item.price}
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

export default ProductsList;
