import { useCallback, useEffect } from 'react';

import cookie from 'js-cookie';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Footer from 'components/Footer';
import LoadingPage from 'components/LoadingPage';
import Navbar from 'components/Navbar';
import SecondFooter from 'components/SecondFooter';

import { postLogoutAPI } from 'client/auth';

import { useClient } from 'shared/hooks/useClient';
import { removeUserProfile, setUserProfile } from 'shared/redux/slices/user-slice';

const PageLayout = ({ children, showNavbarBottom, withFooter, withSecondFooter }) => {
  const dispatch = useDispatch();
  const { isClientLoading } = useClient();

  const checkUserSession = useCallback(async () => {
    const userProfile = localStorage.getItem('ponpes-alhadi-profil');
    const token = cookie.get('auth-token');
    if (userProfile && token) dispatch(setUserProfile(JSON.parse(userProfile)));
    else {
      if (token) await postLogoutAPI();
      dispatch(removeUserProfile());
      cookie.remove('auth-token');
    }
  }, [dispatch]);

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  if (isClientLoading) return <LoadingPage />;

  return (
    <div>
      <Navbar showNavbarBottom={showNavbarBottom} />
      <main>{children}</main>
      {withFooter && <Footer />}
      {withSecondFooter && <SecondFooter />}
    </div>
  );
};

PageLayout.propTypes = {
  showNavbarBottom: PropTypes.bool,
  children: PropTypes.node.isRequired,
  withFooter: PropTypes.bool,
  withSecondFooter: PropTypes.bool,
};

PageLayout.defaultProps = {
  showNavbarBottom: false,
  withFooter: false,
  withSecondFooter: false,
};

export default PageLayout;
