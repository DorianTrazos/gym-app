import { NavLink } from 'react-router-dom';
import styles from './menu.module.css';
const Menu = () => {
  const menuLinkStyles = ({ isActive }) =>
    isActive ? `${styles['menu-link']} ${styles['active']}` : styles['menu-link'];

  return (
    <nav>
      <ul className={styles['menu']}>
        <li>
          <NavLink
            to='/gym'
            className={menuLinkStyles}
          >
            <img
              src='/assets/icons/gym.svg'
              alt=''
            />
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/history'
            className={menuLinkStyles}
          >
            <img
              src='/assets/icons/history.svg'
              alt=''
            />
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/settings'
            className={menuLinkStyles}
          >
            <img
              src='/assets/icons/config.svg'
              alt=''
            />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
