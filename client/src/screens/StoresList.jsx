import React from 'react';

import { v4 as uuidv4 } from 'uuid';

import useFetch from '../hooks/useFetch';

import './StoresList.scoped.scss';
import StoreCard from '../components/StoreCard';

const Store = () => {
  const { data, loading } = useFetch(`http://localhost:3000/stores`);

  if (loading || !data) return <div>Loading...</div>;

  return (
    <div className='stores-list'>
      <h2>{data.count} Available Stores:</h2>
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
    </div>
  );
};

export default Store;
