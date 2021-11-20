const productCardStyles = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  maxWidth: '400px',
  width: '100%',
  border: '1px solid gray',
  borderRadius: '12px',
  margin: '0 0 15px',
};

const ProductCard = ({
  productName,
  productDescription,
  productImg,
  productImgAlt,
}) => {
  return (
    <div className='product-card' style={{ ...productCardStyles }}>
      <div className='product-info'>
        <h3>{productName}</h3>
        <p>{productDescription}</p>
        <button>Add to cart</button>
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
