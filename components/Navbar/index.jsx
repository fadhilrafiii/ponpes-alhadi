import { useRouter } from 'next/router';
import React, { memo } from 'react';

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Img from 'components/base/Img';

import { selectUserProfile } from 'shared/redux/slices/user-slice';

import AuthenticatedNavbar from './AuthenticatedNavbar';
import { breadcrumbs } from './constants';
import UnauthenticatedNavbar from './UnauthenticatedNavbar';

import styles from './index.module.scss';

import CallIcon from 'public/icons/call.svg';

const Navbar = memo(({ showNavbarBottom }) => {
  const userProfile = useSelector(selectUserProfile);
  const { pathname } = useRouter();

  const isAuthenticated = Object.keys(userProfile).length > 0;

  const breadcrumbsContent = breadcrumbs[pathname];

  return (
    <header className={styles.navbarContainer}>
      {isAuthenticated ? (
        <AuthenticatedNavbar userProfile={userProfile} />
      ) : (
        <UnauthenticatedNavbar />
      )}
      {breadcrumbsContent && (
        <div className={styles.breadcrumb}>
          {breadcrumbsContent.map((bc, idx) => {
            return (
              <React.Fragment key={idx}>
                {idx !== 0 && <span>&gt;</span>}
                <span>{bc}</span>
              </React.Fragment>
            );
          })}
        </div>
      )}
      {showNavbarBottom && (
        <div className={styles.navbarBottom}>
          <div className={styles.callUs}>
            <Img src={CallIcon} alt="Hubungi Kami" layout="fixed" width={32} height={32} priority />
            <p>Hubungi Kami</p>
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
