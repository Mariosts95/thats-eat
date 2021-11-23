import Home from './screens/Home';
import Store from './screens/Store';
import Sandbox from './screens/Sandbox';
import ShoppingCartProvider from './store/ShoppingCartProvider';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <ShoppingCartProvider>
      <Store />
      <ShoppingCart />
    </ShoppingCartProvider>
  );
}

export default App;
