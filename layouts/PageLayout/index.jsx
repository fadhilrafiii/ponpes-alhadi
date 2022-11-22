import { useEffect } from 'react';

import cookie from 'js-cookie';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setUserProfile } from 'redux/slices/user-slice';

import Footer from 'components/Footer';
import Navbar from 'components/Navbar';

const PageLayout = ({ children, showNavbarBottom, withFooter }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const userProfile = localStorage.getItem('ponpes-alhadi-profil');
    if (userProfile) dispatch(setUserProfile(JSON.parse(userProfile)));
    else cookie.remove('auth-token');
  }, [dispatch]);

  return (
    <div>
      <Navbar showNavbarBottom={showNavbarBottom} />
      {children}
      {withFooter && <Footer />}
    </div>
  );
};

PageLayout.propTypes = {
  showNavbarBottom: PropTypes.bool,
  children: PropTypes.node.isRequired,
  withFooter: PropTypes.bool,
};

PageLayout.defaultProps = {
  showNavbarBottom: false,
  withFooter: false,
};

export default PageLayout;
