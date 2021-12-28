import React from 'react';
import { UseShoppingCart } from '../store/ShoppingCartProvider';
import { UseStores } from '../store/StoreProvider';

import ProductCard from '../components/ProductCard';
import { useParams } from 'react-router-dom';

import './Store.scoped.scss';

const Store = () => {
  const { addToCart } = UseShoppingCart();
  let { id } = useParams();
  const { storesList, storesLoading } = UseStores();

  if (storesLoading || !storesList) return <div>Loading...</div>;

  const store = storesList.stores.find((x) => (x._id = id));
  return (
    <>
      <div className='banner'>
        <img src={`/src/assets/images/${id}/banner.jpg`} alt='' />
      </div>
      <h1>{store.name}</h1>
      <h2>Products ({store.menu.length}):</h2>
      {store.menu.map((product) => (
        <ProductCard
          key={product._id}
          name={product.name}
          description={product.description}
          imgPath={`/src/assets/images/${id}/${product._id}.jpg`}
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
