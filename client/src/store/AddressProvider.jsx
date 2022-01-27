import { createContext, useContext, useState } from 'react';

const AddressContext = createContext({});

const UseAddress = () => useContext(AddressContext);

const AddressProvider = ({ children }) => {
  const [address, setAddress] = useState();

  const updateAddress = (newAddress) => {
    setAddress(newAddress);
  };

  return (
    <AddressContext.Provider value={{ address, updateAddress }}>
      {children}
    </AddressContext.Provider>
  );
};

export { UseAddress };

export default AddressProvider;
