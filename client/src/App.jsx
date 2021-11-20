import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';
import ShoppingCartProvider from './store/ShoppingCartProvider';

function App() {
  const [count, setCount] = useState(0);

  return (
    <ShoppingCartProvider>
      <Home />
    </ShoppingCartProvider>
  );
}

export default App;
