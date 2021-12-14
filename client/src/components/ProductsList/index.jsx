import ProductCard from '../ProductCard';

const ProductsList = ({ title, products, onClick }) => {
  return (
    <>
      <h2>{title}</h2>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {products.map((product) => (
          <li>
            <ProductCard
              name={product.name}
              description={product.description}
              imgPath={product.imgPath}
              imgAlt={product.imgAlt}
              price={product.price}
              onClick={onClick}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsList;
