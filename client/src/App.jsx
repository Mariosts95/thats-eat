import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import StoresList from './screens/StoresList';
import Home from './screens/Home';
import ShoppingCartProvider from './store/ShoppingCartProvider';
import StoreProviver from './store/StoreProvider';
import CartModal from './components/CartModal';
import Store from './screens/Store';

function App() {
  return (
    <ShoppingCartProvider>
      <Header />
      <CartModal />
      <StoreProviver>
        <Routes>
          <Route path='/' element={<Home />} />
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
