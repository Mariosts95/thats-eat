import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import StoresList from './screens/StoresList';
import Dummy from './screens/dummy';
import ShoppingCartProvider from './store/ShoppingCartProvider';
import StoreProviver from './store/StoreProvider';
import ShoppingCart from './components/ShoppingCart';
import CartModal from './components/CartModal';
import Store from './screens/Store';

function App() {
  return (
    <ShoppingCartProvider>
      <Header />
      <CartModal />
      <StoreProviver>
        <Routes>
          <Route path='/' element={<Dummy />} />
          <Route path='/stores/'>
            <Route index element={<StoresList />} />
            <Route path=':id' element={<Store />} />
          </Route>
        </Routes>
      </StoreProviver>
    </ShoppingCartProvider>
  );
}

export default App;
