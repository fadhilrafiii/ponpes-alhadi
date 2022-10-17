import ApartmentIcon from '@mui/icons-material/Apartment';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import Grid from '@mui/material/Grid';

import classes from './index.module.css';

const Navbar = () => {
  return (
    <header className={classes.container}>
      <Grid container justifyContent="space-between" alignItems="flex-start" wrap="nowrap">
        <Grid item className={classes.hamburger}>
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
          <Grid item>
            <ApartmentIcon sx={{ fontSize: 42 }} />
          </Grid>
          <Grid item>
            <h3>Hotel Name</h3>
          </Grid>
        </Grid>
        <Grid item className={classes.login}>
          <PersonIcon sx={{ fontSize: 20 }} />
        </Grid>
      </Grid>
    </header>
  );
};

export default Navbar;
