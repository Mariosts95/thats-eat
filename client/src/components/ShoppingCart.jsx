import { UseShoppingCart } from '../store/ShoppingCartProvider';
import ProductCard from './ProductCard';

const ShoppingCart = () => {
  const { shoppingCart, removeFromCart } = UseShoppingCart();

  if (shoppingCart.length === 0) return null;

  return (
    <div>
      <h2>Shoping Cart</h2>
      {shoppingCart.map((item) => (
        <ProductCard
          productId={item.productId}
          productName={item.productName}
          productDescription={item.productDescription}
          productImg={item.productImg}
          productImgAlt={item.productImgAlt}
          onClick={() => {
            removeFromCart(item);
          }}
        />
      ))}
    </div>
  );
};

export default ShoppingCart;
