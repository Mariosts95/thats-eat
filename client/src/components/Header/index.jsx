import { NavLink } from 'react-router-dom';

import './Header.scoped.scss';

import logo from '../../assets/images/logo_transparent_2.png';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-wrapper'>
        <div className='logo-container'>
          <img src={logo} alt='main logo' srcset='' />
        </div>
        <div className='nav-container'>
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
