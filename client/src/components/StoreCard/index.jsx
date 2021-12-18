import { useEffect, useState } from 'react';

import { UseStores } from '../../store/StoreProvider';

import './StoreCard.scoped.scss';

import banner1 from '../../assets/images/dummy-store-banner.jpg';

const StoreCard = ({
  name,
  cuisines,
  banner,
  bannerAlt,
  rating,
  minDelivery,
}) => {
  const { cuisines: cuisinesList, cuisinesLoading } = UseStores();
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (!cuisinesLoading) {
      const filtered = cuisines.map((value) =>
        cuisinesList.find(({ _id }) => _id === value)
      );
      setFiltered([...filtered]);
    }
  }, [cuisinesLoading]);

  return (
    <div className='store-card'>
      <div className='image'>
        <img src={banner1} alt={bannerAlt} />
      </div>
      <div className='info'>
        <h3>{name}</h3>
        <p className='cuisines'>
          {filtered.map((cuisine) => (
            <span key={cuisine._id}>{cuisine.name}</span>
          ))}
        </p>
        <span className='min'>Min. €{minDelivery}</span>
      </div>
      <div className='rating'>
        <span>⭐{rating}</span>
      </div>
    </div>
  );
};

export default StoreCard;
