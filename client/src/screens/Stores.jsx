import React from 'react';
import { UseShoppingCart } from '../store/ShoppingCartProvider';
import ProductCard from '../components/ProductCard';
import { v4 as uuidv4 } from 'uuid';
import useFetch from '../hooks/useFetch';

const Store = () => {
  const { addToCart } = UseShoppingCart();

  const { data, loading } = useFetch(`http://localhost:3000/stores`);
  console.log(data);

  if (loading || !data) return <div>Loading...</div>;
  return (
    <>
      <h2>Stores:</h2>
      {data.stores.map((product) => (
        <ProductCard
          key={uuidv4()}
          name={product.name}
          description={product.rating}
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
