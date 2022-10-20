import ApartmentIcon from '@mui/icons-material/Apartment';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import Grid from '@mui/material/Grid';

import PropTypes from 'prop-types';

import classes from './index.module.css';

const Navbar = ({ isSidebarOpen, actionToggleSidebar }) => {
  const classNames = [classes.navbar];
  if (isSidebarOpen) classNames.push(classes.whiteNavbar);

  return (
    <header className={classNames.join(' ')}>
      <Grid container justifyContent="space-between" alignItems="flex-start" wrap="nowrap">
        <Grid item className={classes.hamburger} onClick={actionToggleSidebar}>
          <MenuIcon sx={{ fontSize: 20 }} />
        </Grid>
        <Grid
          item
          container
          spacing={1}
          alignItems="center"
          justifyContent="center"
          className={classes.navbarTitle}
        >
          {!isSidebarOpen && (
            <Grid item>
              <ApartmentIcon sx={{ fontSize: 40 }} />
            </Grid>
          )}
          <Grid item>
            <h4>Hotel Name</h4>
          </Grid>
        </Grid>
        <Grid item className={classes.login}>
          <PersonIcon sx={{ fontSize: 20 }} />
        </Grid>
      </Grid>
    </header>
  );
};

Navbar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  actionToggleSidebar: PropTypes.func.isRequired,
};

export default Navbar;
