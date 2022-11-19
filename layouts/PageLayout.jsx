import PropTypes from 'prop-types';

import Footer from 'components/Footer';
import Navbar from 'components/Navbar';

const PageLayout = ({ children, showNavbarBottom }) => {
  return (
    <div>
      <Navbar showNavbarBottom={showNavbarBottom} />
      {children}
      <Footer />
    </div>
  );
};

PageLayout.propTypes = {
  showNavbarBottom: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

PageLayout.defaultProps = {
  showNavbarBottom: false,
};

export default PageLayout;
