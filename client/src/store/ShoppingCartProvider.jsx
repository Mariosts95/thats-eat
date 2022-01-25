import { createContext, useContext, useState } from 'react';

const ShoppingCartContext = createContext({});

const UseShoppingCart = () => useContext(ShoppingCartContext);

const ShoppingCartProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState({
    storeId: '',
    items: [],
    total: 0,
  });

  const [open, setOpen] = useState(false);
  const openCart = () => setOpen(true);
  const closeCart = () => setOpen(false);

  const addToCart = (item, storeId, amount) => {
    // setShoppingCart((prev) => [...prev, item]);

    setShoppingCart((prev) => ({ ...prev, storeId }));
    const existingCartItem = shoppingCart.items.find((x) => x._id === item._id);

    if (existingCartItem) {
      console.log('exist');
      setShoppingCart((prev) => {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + amount,
        };

        return {
          ...prev,
          // filter & map to change amount
          items: [
            ...prev.items.filter((item) => item._id !== existingCartItem._id),
            updatedItem,
          ],
          total: prev.total + item.price * item.amount,
        };
      });
    } else {
      console.log('not exist');
      setShoppingCart((prev) => {
        item.amount = amount;
        return {
          ...prev,
          items: [...prev.items, item],
          total: prev.total + item.price * item.amount,
        };
      });
    }
  };

  const removeFromCart = (id) => {
    setShoppingCart((prev) => {
      return {
        ...prev,
        items: prev.items.filter((item) => item._id !== id),
      };
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        addToCart,
        removeFromCart,
        openCart,
        closeCart,
        open,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { UseShoppingCart };

export default ShoppingCartProvider;
