import Link from 'next/link';
import { useRouter } from 'next/router';
import { memo } from 'react';

import PropTypes from 'prop-types';

import Img from 'components/base/Img';

import styles from './index.module.scss';

import logo from 'public/images/logo-192.png';

const Navbar = memo(({ showNavbarBottom }) => {
  const { pathname } = useRouter();

  return (
    <header className={styles.navbarContainer}>
      <div className={styles.navbar}>
        <div>
          <div className={styles.imageWrapper}>
            <Img
              layout="fixed"
              src={logo}
              alt="Ponpes Al Hadi"
              width={50}
              height={50}
              usePlaceholder
            />
          </div>
          <h2>
            PONDOK PESANTREN AL- HADI
            <br /> SUNGAI LANGKA
          </h2>
        </div>
        <div className={styles.menu}>
          <ul>
            <li className={'/' === pathname ? styles.activeMenu : ''}>
              <Link href="/">Home</Link>
            </li>
            <li className={'/tentang-kami' === pathname ? styles.activeMenu : ''}>
              <Link href="/tentang-kami">Tentang Kami</Link>
            </li>
            <li className={'/akademik' === pathname ? styles.activeMenu : ''}>
              <Link href="/akademik">Akademik</Link>
            </li>
            <li className={'/penerimaan' === pathname ? styles.activeMenu : ''}>
              <Link href="/penerimaan">Penerimaan Murid Baru</Link>
            </li>
          </ul>
        </div>
        <div className={styles.hamburger}>
          <span />
          <span />
          <span />
        </div>
      </div>
      {showNavbarBottom && (
        <div className={styles.navbarBottom}>
          <div className={styles.callUs}>
            <Img src="/icons/call.svg" layout="fixed" width={32} height={32} priority />
            <div>Hubungi Kami</div>
          </div>
        </div>
      )}
    </header>
  );
});

Navbar.propTypes = {
  showNavbarBottom: PropTypes.bool,
};

Navbar.defaultProps = {
  showNavbarBottom: false,
};

export default Navbar;
