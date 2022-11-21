import PropTypes from 'prop-types';

import Footer from 'components/Footer';
import Navbar from 'components/Navbar';

const PageLayout = ({ children, showNavbarBottom, withFooter }) => {
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
