import { UseShoppingCart } from '../store/ShoppingCartProvider';
import ProductCard from './ProductCard';
import { v4 as uuidv4 } from 'uuid';

const ShoppingCart = () => {
  const { shoppingCart, removeFromCart } = UseShoppingCart();

  if (shoppingCart.length === 0) return null;

  return (
    <div>
      <h2>Shoping Cart</h2>
      {shoppingCart.map((item) => (
        <ProductCard
          key={uuidv4()}
          id={item.id}
          name={item.name}
          description={item.description}
          imgPath={item.imgPath}
          imgAlt={item.imgAlt}
          price={item.price}
          cart
          onClick={() => {
            removeFromCart(item);
          }}
        />
      ))}
    </div>
  );
};

export default ShoppingCart;
