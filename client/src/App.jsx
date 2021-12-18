import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import ProductsList from './screens/ProductsList';
import StoresList from './screens/StoresList';
import Dummy from './screens/dummy';
import ShoppingCartProvider from './store/ShoppingCartProvider';
import StoreProviver from './store/StoreProvider';
import ShoppingCart from './components/ShoppingCart';
import CartModal from './components/CartModal';

function App() {
  return (
    <ShoppingCartProvider>
      <Header />
      <CartModal />
      <StoreProviver>
        <Routes>
          <Route path='/' element={<Dummy />} />
          <Route path='/products' element={<ProductsList />} />
          <Route path='/stores' element={<StoresList />} />
        </Routes>
      </StoreProviver>
    </ShoppingCartProvider>
  );
}

export default App;
