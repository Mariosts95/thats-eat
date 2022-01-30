import { Route, Routes, Outlet } from 'react-router-dom';

// Components
import Header from './components/Header';
import StoresList from './screens/StoresList';
import Home from './screens/Home';
import Store from './screens/Store';
import CartModal from './components/CartModal';
import Checkout from './screens/Checkout';
import CompleteOrder from './screens/CompleteOrder';

// Context
import ShoppingCartProvider from './store/ShoppingCartProvider';
import AddressProvider from './store/AddressProvider';
import StoreProviver from './store/StoreProvider';

function App() {
  return (
    <AddressProvider>
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
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/complete' element={<CompleteOrder />} />
        </Routes>
      </ShoppingCartProvider>
    </AddressProvider>
  );
}

export default App;
