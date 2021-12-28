import React from 'react';

import { UseStores } from '../store/StoreProvider';

import './StoresList.scoped.scss';
import StoreCard from '../components/StoreCard';

const StoreList = () => {
  const { storesList, storesLoading } = UseStores();

  if (storesLoading || !storesList) return <div>Loading...</div>;

  return (
    <div className='stores-list'>
      <h2>{storesList.count} Available Stores:</h2>
      {storesList.stores.map((store) => (
        <StoreCard
          key={store._id}
          id={`/stores/${store._id}`}
          name={store.name}
          cuisines={store.cuisines}
          banner={store.imgPath}
          imgAlt={store.imgAlt}
          rating={store.rating}
          minDelivery={store.minDelivery}
        />
      ))}
    </div>
  );
};

export default StoreList;
