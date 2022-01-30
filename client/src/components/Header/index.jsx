import { NavLink } from 'react-router-dom';

// Context
import { UseShoppingCart } from '../../store/ShoppingCartProvider';

// MUI
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// Styles
import './Header.scoped.scss';

// Assets
import logo from '../../assets/images/logo_transparent_2.png';

const Header = () => {
  const { shoppingCart, openCart, closeCart } = UseShoppingCart();

  return (
    <div className='header'>
      <div className='header-wrapper'>
        <div className='logo-container'>
          <NavLink to='/'>
            <img src={logo} alt='main logo' />
          </NavLink>
        </div>
        <div className='nav-container'>
          <Button
            className='cart-btn'
            onClick={shoppingCart.items.length > 0 ? openCart : closeCart}
          >
            <ShoppingCartIcon />
          </Button>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
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
