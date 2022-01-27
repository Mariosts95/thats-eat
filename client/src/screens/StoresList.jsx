import { useState } from 'react';
import { Link } from 'react-router-dom';

import { UseStores } from '../store/StoreProvider';
import { UseAddress } from '../store/AddressProvider';

import './StoresList.scoped.scss';
import StoreCard from '../components/StoreCard';

const StoreList = () => {
  const { storesList, storesLoading, cuisines } = UseStores();
  const { address } = UseAddress();

  const [filter, setFilter] = useState('all');

  const getFilter = (e) => {
    setFilter(e.target.value);
  };

  if (!address)
    return (
      <div className='no-address-container'>
        <h1>Please add your address to continue...</h1>
        <Link to='/'>Go back</Link>
      </div>
    );

  if (storesLoading || !storesList || !cuisines) return <div>Loading...</div>;

  return (
    <div className='stores-list'>
      <div className='stores-top-container'>
        <div className='title'>
          <h2>
            {storesList.count} Available Stores deliver to {address}:
          </h2>
        </div>
        <div className='filters'>
          <label>Filter: </label>
          <select name='cuisines' id='cuisines' onChange={getFilter}>
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
        .filter((store) => filter == 'all' || store.cuisines.includes(filter))
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
