import { createContext, useContext, useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';

const StoresContext = createContext({});

const UseStores = () => useContext(StoresContext);

const StoresProvider = ({ children }) => {
  const [cuisines, setCuisines] = useState([]);
  const { data: cuisinesList, loading: cuisinesLoading } = useFetch(
    `http://localhost:3000/cuisines`
  );

  useEffect(() => {
    if (!cuisinesLoading) setCuisines(cuisinesList);
  }, [cuisinesLoading]);

  return (
    <StoresContext.Provider value={{ cuisines, cuisinesLoading }}>
      {children}
    </StoresContext.Provider>
  );
};

export { UseStores };

export default StoresProvider;
