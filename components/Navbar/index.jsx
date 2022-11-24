import { memo } from 'react';

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Img from 'components/base/Img';

import { selectUserProfile } from 'shared/redux/slices/user-slice';

import AuthenticatedNavbar from './AuthenticatedNavbar';
import UnauthenticatedNavbar from './UnauthenticatedNavbar';

import styles from './index.module.scss';

const Navbar = memo(({ showNavbarBottom }) => {
  const userProfile = useSelector(selectUserProfile);

  const isAuthenticated = Object.keys(userProfile).length > 0;
  console.log(isAuthenticated);

  return (
    <header className={styles.navbarContainer}>
      {isAuthenticated ? (
        <AuthenticatedNavbar userProfile={userProfile} />
      ) : (
        <UnauthenticatedNavbar />
      )}
      {showNavbarBottom && (
        <div className={styles.navbarBottom}>
          <div className={styles.callUs}>
            <Img
              src="/icons/call.svg"
              alt="Hubungi Kami"
              layout="fixed"
              width={32}
              height={32}
              priority
            />
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
