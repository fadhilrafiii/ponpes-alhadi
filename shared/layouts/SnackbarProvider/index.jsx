import React from 'react';

import PropTypes from 'prop-types';

import Snackbar from 'components/Snackbar';

const SnackbarProvider = ({ children }) => {
  return (
    <React.Fragment>
      <Snackbar />
      {children}
    </React.Fragment>
  );
};

SnackbarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SnackbarProvider;
