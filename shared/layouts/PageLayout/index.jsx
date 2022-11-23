import { useEffect } from 'react';

import cookie from 'js-cookie';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Footer from 'components/Footer';
import LoadingPage from 'components/LoadingPage';
import Navbar from 'components/Navbar';

import { useClient } from 'shared/hooks/useClient';
import { setUserProfile } from 'shared/redux/slices/user-slice';

const PageLayout = ({ children, showNavbarBottom, withFooter }) => {
  const dispatch = useDispatch();
  const { isClientLoading } = useClient();

  useEffect(() => {
    const userProfile = localStorage.getItem('ponpes-alhadi-profil');
    if (userProfile) dispatch(setUserProfile(JSON.parse(userProfile)));
    else cookie.remove('auth-token');
  }, [dispatch]);

  if (isClientLoading) return <LoadingPage />;

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
