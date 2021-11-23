import './ProductCard.scopped.css';

const ProductCard = ({
  name,
  description,
  imgPath,
  imgAlt,
  price,
  onClick,
  cart,
  quantity,
}) => {
  return (
    <div className='product-card'>
      <div className='info'>
        <h3 className='name'>{name}</h3>
        <p className='description'>{description}</p>
        <p className='price'>€{price}</p>
        <button onClick={onClick}>
          {cart ? 'Remove from' : 'Add to'} cart
        </button>
      </div>
      <div>
        <img src={imgPath} alt={imgAlt} />
      </div>
    </div>
  );
};

export default ProductCard;
