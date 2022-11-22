import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useRef } from 'react';

import { postLogoutAPI } from 'client/auth';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { showSnackbar } from 'redux/slices/snackbar-slice';
import { removeUserProfile } from 'redux/slices/user-slice';

import Img from 'components/base/Img';

import styles from './index.module.scss';

import avatarIcon from 'public/icons/avatar.svg';
import homeIcon from 'public/icons/home.svg';

const AuthenticatedNavbar = ({ userProfile }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { pathname } = useRouter();

  const menuDropdownRef = useRef();
  const profileDropdownRef = useRef();

  const handleToggleMenuDropdown = () => {
    if (
      menuDropdownRef?.current?.style.display === 'none' ||
      menuDropdownRef?.current?.style.display === ''
    ) {
      menuDropdownRef.current.style.display = 'flex';
      menuDropdownRef.current.focus();
    } else {
      menuDropdownRef.current.style.display = 'none';
    }
  };

  const handleToggleProfileDropdown = () => {
    if (
      profileDropdownRef?.current?.style.display === 'none' ||
      profileDropdownRef?.current?.style.display === ''
    ) {
      profileDropdownRef.current.style.display = 'flex';
      profileDropdownRef.current.focus();
    } else {
      profileDropdownRef.current.style.display = 'none';
    }
  };

  const handleLogout = useCallback(async () => {
    const { success, message } = await postLogoutAPI();
    if (!success) return;

    dispatch(showSnackbar({ message, type: 'success' }));
    dispatch(removeUserProfile());
    localStorage.removeItem('ponpes-alhadi-profil');

    router.replace('/');
  }, [dispatch, router]);

  const menuName = pathname.split('/').pop();
  return (
    <nav className={styles.authenticatedNav}>
      <div className={styles.navLeft}>
        <div className={styles.logoWrapper}>
          <Img
            priority
            src={homeIcon}
            alt="Home Akademik Pondok Pesantren Al Hadi"
            width={48}
            height={36}
          />
          <h3 className={styles.currentMenu}>{menuName.toUpperCase()}</h3>
        </div>
        <div className={styles.menuDropdownWrapper}>
          <div role="button" className={styles.menuSelect} onClick={handleToggleMenuDropdown}>
            <h3>Menu</h3>
            <span className={styles.triangle} />
          </div>
          <div
            ref={menuDropdownRef}
            className={styles.menuDropdown}
            tabIndex={0}
            onBlur={handleToggleMenuDropdown}
          >
            <Link href="/">
              <h4>Home</h4>
            </Link>
            <Link href="/tentang-kami">
              <h4>Tentang Kami</h4>
            </Link>
            <Link href="/akademik">
              <h4>Akademik</h4>
            </Link>
            <Link href="/santri">
              <h4>Santri</h4>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.navRight}>
        <div className={styles.profileWrapper}>
          <Img
            priority
            src={avatarIcon}
            alt="Avatar"
            width={32}
            height={32}
            className={styles.avatarIcon}
          />
          <h3 className={styles.name}>{userProfile?.fullName || 'Guest'}</h3>
          <span className={styles.triangle} role="button" onClick={handleToggleProfileDropdown} />
          <div
            ref={profileDropdownRef}
            className={styles.menuDropdown}
            tabIndex={0}
            onBlur={handleToggleProfileDropdown}
          >
            <h4 role="button" onClick={handleLogout}>
              Logout
            </h4>
          </div>
        </div>
      </div>
    </nav>
  );
};

AuthenticatedNavbar.propTypes = {
  userProfile: PropTypes.object,
};

AuthenticatedNavbar.defaultProps = {
  userProfile: {},
};

export default AuthenticatedNavbar;
