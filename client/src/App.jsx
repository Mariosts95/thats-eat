import ProductsList from './screens/ProductsList';
import StoresList from './screens/StoresList';
import Sandbox from './screens/Sandbox';
import Dummy from './screens/dummy';
import ShoppingCartProvider from './store/ShoppingCartProvider';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <ShoppingCartProvider>
      <ProductsList />
      <StoresList />
    </ShoppingCartProvider>
  );
}

export default App;
