import PropTypes from 'prop-types';
import logo from 'public/images/logo-192.png';

import Img from 'components/base/Img';

import styles from './index.module.scss';

const Navbar = () => {
  return (
    <header className={styles.navbarContainer}>
      <div>
        <div>
          <Img
            layout="fixed"
            src={logo}
            alt="Ponpes Al Hadi"
            width={84}
            height={80}
            usePlaceholder
          />
        </div>
        <h2>PONDOK PESANTREN AL- HADI</h2>
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Akademik</li>
          <li>Penerimaan Murid Baru</li>
        </ul>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  actionToggleSidebar: PropTypes.func.isRequired,
};

export default Navbar;
