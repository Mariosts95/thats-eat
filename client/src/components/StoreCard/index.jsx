import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { UseStores } from '../../store/StoreProvider';

import './StoreCard.scoped.scss';

const StoreCard = ({
  name,
  cuisines,
  banner,
  bannerAlt,
  rating,
  minDelivery,
  id,
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
    <Link to={id} className='store-card'>
      <div className='image'>
        <img src={`/src/assets/images/${banner}/banner.jpg`} alt={bannerAlt} />
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
    </Link>
  );
};

export default StoreCard;
