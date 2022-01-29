import React from 'react';
import { useParams } from 'react-router-dom';

import { UseStores } from '../store/StoreProvider';

import ProductCard from '../components/ProductCard';

import './Store.scoped.scss';

const Store = () => {
  let { id } = useParams();
  const { storesList, storesLoading } = UseStores();

  if (storesLoading || !storesList) return <div>Loading...</div>;

  const store = storesList.stores.find((x) => x._id === id);
  const groupedProducts = {};

  for (let i = 0; i < store.menu.length; i += 1) {
    const product = store.menu[i];

    if (!(product.category in groupedProducts)) {
      groupedProducts[product.category] = [product];
    } else {
      groupedProducts[product.category].push(product);
    }
  }

  const categories = Object.keys(groupedProducts);

  return (
    <>
      <div className='banner'>
        <img src={`/src/assets/images/${id}/banner.jpg`} alt='' />
      </div>
      <div className='store-container'>
        <h1>{store.name}</h1>
        <h2>Products ({store.menu.length}):</h2>
      </div>

      {categories.map((category) => (
        <div className='category-container' key={category}>
          <h3>{category}:</h3>
          {groupedProducts[category].map((product) => (
            <ProductCard
              storeId={id}
              key={product._id}
              id={product._id}
              imgPath={`/src/assets/images/${id}/${product._id}.jpg`}
              product={product}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default Store;
