import { createContext, useContext, useState } from 'react';

const ShoppingCartContext = createContext({});

const UseShoppingCart = () => useContext(ShoppingCartContext);

const ShoppingCartProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState({
    storeId: '',
    items: [],
  });

  const [open, setOpen] = useState(false);
  const openCart = () => setOpen(true);
  const closeCart = () => setOpen(false);

  const addToCart = (item, storeId, amount) => {
    setShoppingCart((prev) => ({ ...prev, storeId }));
    const existingCartItem = shoppingCart.items.find((x) => x._id === item._id);

    if (existingCartItem) {
      // product already exist
      setShoppingCart((prev) => {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + amount,
        };

        return {
          ...prev,
          items: [
            ...prev.items.filter((item) => item._id !== existingCartItem._id),
            updatedItem,
          ],
        };
      });
    } else {
      //product doesn't exist
      setShoppingCart((prev) => {
        // set the amount
        item.amount = amount;
        return {
          ...prev,
          items: [...prev.items, item],
        };
      });
    }
  };

  const removeFromCart = (id) => {
    setShoppingCart((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item._id !== id),
    }));
  };

  const updateCartItem = (id, amount) => {
    setShoppingCart((prev) => ({
      ...prev,
      items: prev.items.map((item) =>
        item._id === id ? { ...item, amount: amount } : item
      ),
    }));
  };

  const emptyCart = () => {
    setShoppingCart((prev) => ({
      ...prev,
      storeId: '',
      items: [],
    }));
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
        updateCartItem,
        emptyCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { UseShoppingCart };

export default ShoppingCartProvider;
