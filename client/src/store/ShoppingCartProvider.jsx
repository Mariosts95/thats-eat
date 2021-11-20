import { createContext, useContext, useState } from 'react';

const ShoppingCartContext = createContext({});

const UseShoppingCart = () => useContext(ShoppingCartContext);

const ShoppingCartProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([]);

  const addToCart = (id) => {
    setShoppingCart((prev) => [...prev, id]);
  };

  const removeFromCart = (id) => {
    setShoppingCart((prev) => prev.filter((item) => item !== id));
  };

  return (
    <ShoppingCartContext.Provider
      value={{ shoppingCart, addToCart, removeFromCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { UseShoppingCart };

export default ShoppingCartProvider;
