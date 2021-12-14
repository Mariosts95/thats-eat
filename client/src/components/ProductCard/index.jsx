import './ProductCard.scoped.scss';

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
      <div className='image'>
        <img src={imgPath} alt={imgAlt} />
      </div>
      <div className='info'>
        <h3 className='name'>{name}</h3>
        <p className='description'>{description}</p>
        <p className='price'>€{price}</p>
        <button onClick={onClick}>
          {cart ? 'Remove from' : 'Add to'} cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
