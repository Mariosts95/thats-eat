const productCardStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: '1px solid gray',
  borderRadius: '12px',
  margin: '0 0 15px',
  padding: '20px',
};

const ProductCard = ({
  productName,
  productDescription,
  productImg,
  productImgAlt,
  onClick,
}) => {
  return (
    <div className='product-card' style={{ ...productCardStyles }}>
      <div className='product-info'>
        <h3>{productName}</h3>
        <p>{productDescription}</p>
        <button onClick={onClick}>Add to cart</button>
      </div>
      <div className='product-img'>
        <img
          src={productImg}
          alt={productImgAlt}
          style={{ width: '150px', height: '150px', objectFit: 'cover' }}
        />
      </div>
    </div>
  );
};

export default ProductCard;
