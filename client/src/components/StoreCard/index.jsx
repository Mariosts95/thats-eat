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
  return (
    <div className='store-card'>
      <div className='image'>
        <img src={banner1} alt={bannerAlt} />
      </div>
      <div className='info'>
        <h3>{name}</h3>
        <p>{cuisines[0]}</p>
        <span className='min'>Min. €{minDelivery}</span>
      </div>
      <div className='rating'>
        <span>⭐{rating}</span>
      </div>
    </div>
  );
};

export default StoreCard;
