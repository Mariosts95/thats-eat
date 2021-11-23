import React from 'react';
import ProductsList from '../components/ProductsList';
import { UseShoppingCart } from '../store/ShoppingCartProvider';
import espressoImg from '../assets/images/espresso.png';
import freddoEspressoImg from '../assets/images/freddo-espresso.jpg';
import cappucinoImg from '../assets/images/cappuchino.webp';
import freddoCappucinoImg from '../assets/images/freddo-cappuccino.jpg';
import ShoppingCart from '../components/ShoppingCart';
import ProductCard from '../components/ProductCard';
import { v4 as uuidv4 } from 'uuid';

const products = [
  {
    id: 1,
    name: 'Espresso',
    description: '100% Arabica',
    imgPath: espressoImg,
    imgAlt: 'product',
    price: '1.20',
  },
  {
    id: 2,
    name: 'Freddo Espresso',
    description: '100% Arabica',
    imgPath: freddoEspressoImg,
    imgAlt: 'product',
    price: '1.80',
  },
  {
    id: 3,
    name: 'Cappucino',
    description: '100% Arabica',
    imgPath: cappucinoImg,
    imgAlt: 'product',
    price: '1.80',
  },
  {
    id: 4,
    name: 'Freddo Cappucino',
    description: '100% Arabica',
    imgPath: freddoCappucinoImg,
    imgAlt: 'product',
    price: '2.00',
  },
];

const Store = () => {
  const { addToCart } = UseShoppingCart();
  return (
    <>
      <h2>Products</h2>
      {products.map((product) => (
        <ProductCard
          key={uuidv4()}
          name={product.name}
          description={product.description}
          imgPath={product.imgPath}
          imgAlt={product.imgAlt}
          price={product.price}
          onClick={() => {
            addToCart(product);
          }}
        />
      ))}
    </>
  );
};

export default Store;
