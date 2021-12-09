import Home from './screens/Home';
import Stores from './screens/Stores';
import Sandbox from './screens/Sandbox';
import ShoppingCartProvider from './store/ShoppingCartProvider';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <ShoppingCartProvider>
      <Stores />
      <ShoppingCart />
    </ShoppingCartProvider>
  );
}

export default App;
