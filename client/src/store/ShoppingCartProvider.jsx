import { createContext, useContext, useState } from 'react';

const ShoppingCartContext = createContext({});

const UseShoppingCart = () => useContext(ShoppingCartContext);

const ShoppingCartProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
    total: 0,
  });
  const [open, setOpen] = useState(false);
  const openCart = () => setOpen(true);
  const closeCart = () => setOpen(false);

  const addToCart = (item) => {
    // setShoppingCart((prev) => [...prev, item]);
    const itemExistsOnCartIndex = shoppingCart.items.findIndex(
      (x) => x.id === item.id
    );
    const existingCartItem = shoppingCart.items[itemExistsOnCartIndex];

    console.log(itemExistsOnCartIndex);
    console.log(existingCartItem);

    if (existingCartItem) {
      console.log('exists');
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + item.amount,
      };
      console.log({ updatedItem });

      setShoppingCart((prev) => {
        return {
          ...prev,
          items: [
            ...prev.items,
            (prev.items[itemExistsOnCartIndex] = updatedItem),
          ],
          total: prev.total + item.price * item.amount,
        };
      });
    } else {
      console.log('not exists');
      setShoppingCart((prev) => {
        return {
          ...prev,
          items: [...prev.items, item],
          total: prev.total + item.price * item.amount,
        };
      });
    }

    // setShoppingCart((prev) => {
    //   return {
    //     ...prev,
    //     items: [...prev.items, item],
    //     total: prev.total + item.price * item.amount,
    //   };
    // });
  };

  const removeFromCart = (id) => {
    setShoppingCart((prev) => prev.filter((item) => item !== id));
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
