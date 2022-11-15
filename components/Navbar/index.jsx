import PropTypes from 'prop-types';

import Img from 'components/base/Img';

import styles from './index.module.scss';

import logo from 'public/images/logo-192.png';

const Navbar = () => {
  return (
    <header className={styles.navbarContainer}>
      <div>
        <div className={styles.imageWrapper}>
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
      <div className={styles.menu}>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Akademik</li>
          <li>Penerimaan Murid Baru</li>
        </ul>
      </div>
      <div className={styles.hamburger}>
        <span />
        <span />
        <span />
      </div>
    </header>
  );
};

Navbar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  actionToggleSidebar: PropTypes.func.isRequired,
};

export default Navbar;
