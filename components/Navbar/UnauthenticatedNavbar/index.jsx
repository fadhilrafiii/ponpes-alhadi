import Link from 'next/link';
import { useRouter } from 'next/router';
import { memo, useState } from 'react';

import Img from 'components/base/Img';

import Hamburger from '../Hamburger';

import styles from '../index.module.scss';

import logo from 'public/images/logo-192.png';

const UnauthenticatedNavbar = memo(() => {
  const { pathname } = useRouter();
  const [isOpenDropdownMobile, setIsOpenDropdownMobile] = useState(false);

  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.navbar}>
        <div>
          <div className={styles.imageWrapper}>
            <Img
              layout="fixed"
              src={logo}
              alt="Pondok Pesantren Al Hadi Sungkai Langka"
              width={50}
              height={50}
              usePlaceholder
            />
          </div>
          <h3>PONDOK PESANTREN AL- HADI SUNGAI LANGKA</h3>
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
            <li>
              <Link href="/login">
                <a className={styles.loginButton}>LOGIN</a>
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={styles.hamburgerContainer}
          role="button"
          onClick={() => setIsOpenDropdownMobile((prev) => !prev)}
        >
          <Hamburger />
        </div>
        {isOpenDropdownMobile && (
          <div className={styles.menuMobile}>
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
              <li>
                <Link href="/login">
                  <a className={styles.loginButton}>Login</a>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
});

export default UnauthenticatedNavbar;
