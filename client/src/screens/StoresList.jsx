import { useState } from 'react';

import { UseStores } from '../store/StoreProvider';

import './StoresList.scoped.scss';
import StoreCard from '../components/StoreCard';

const StoreList = () => {
  const { storesList, storesLoading, cuisines } = UseStores();
  const [filter, setFilter] = useState();
  const getCuisine = (e) => {
    if (e.target.value == 'all') setFilter('');
    setFilter(e.target.value);
  };

  if (storesLoading || !storesList || !cuisines) return <div>Loading...</div>;

  return (
    <div className='stores-list'>
      <div className='stores-top-container'>
        <div className='title'>
          <h2>{storesList.count} Available Stores:</h2>
        </div>
        <div className='filters'>
          <label>Filter: </label>
          <select name='cuisines' id='cuisines' onChange={getCuisine}>
            <option key='all' value='all'>
              All
            </option>
            {cuisines.map((cuisine) => (
              <option key={cuisine._id} value={cuisine._id}>
                {cuisine.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      {storesList.stores
        .filter((store) => {
          if (filter == 'all') return true;
          return store.cuisines.includes(filter);
        })
        .map((store) => (
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
