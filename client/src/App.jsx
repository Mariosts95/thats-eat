import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import ProductsList from './screens/ProductsList';
import StoresList from './screens/StoresList';
import Sandbox from './screens/Sandbox';
import Dummy from './screens/dummy';
import ShoppingCartProvider from './store/ShoppingCartProvider';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <ShoppingCartProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Dummy />} />
        <Route path='/products' element={<ProductsList />} />
        <Route path='/stores' element={<StoresList />} />
        {/* <ProductsList />
        <StoresList /> */}
      </Routes>
    </ShoppingCartProvider>
  );
}

export default App;
