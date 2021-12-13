import React from 'react';
import { UseShoppingCart } from '../store/ShoppingCartProvider';
import ProductCard from '../components/ProductCard';
import StoreCard from '../components/StoreCard';
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
      {data.stores.map((store) => (
        <StoreCard
          key={uuidv4()}
          name={store.name}
          cuisines={store.cuisines}
          banner={store.imgPath}
          imgAlt={store.imgAlt}
          rating={store.rating}
          minDelivery={store.minDelivery}
        />
      ))}
    </>
  );
};

export default Store;
