import { NavLink } from 'react-router-dom';

import { UseShoppingCart } from '../../store/ShoppingCartProvider';

import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import './Header.scoped.scss';

import logo from '../../assets/images/logo_transparent_2.png';

const Header = () => {
  const { shoppingCart, openCart } = UseShoppingCart();

  return (
    <div className='header'>
      <div className='header-wrapper'>
        <div className='logo-container'>
          <img src={logo} alt='main logo' />
        </div>
        <div className='nav-container'>
          <Button
            className='cart-btn'
            onClick={shoppingCart.length > 0 ? openCart : ''}
          >
            <ShoppingCartIcon />
          </Button>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/products'>Products</NavLink>
            </li>
            <li>
              <NavLink to='/stores'>Stores</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
