import { Route, Routes, Outlet } from 'react-router-dom';

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

      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/stores/'
          element={
            <StoreProviver>
              <Outlet />
            </StoreProviver>
          }
        >
          <Route index element={<StoresList />} />
          <Route path=':id' element={<Store />} />
        </Route>
      </Routes>
    </ShoppingCartProvider>
  );
}

export default App;
