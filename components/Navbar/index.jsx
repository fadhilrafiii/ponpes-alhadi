import Link from 'next/link';
import { useCallback, useEffect, useRef } from 'react';

import ApartmentIcon from '@mui/icons-material/Apartment';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import PublicIcon from '@mui/icons-material/Public';
import Grid from '@mui/material/Grid';

import PropTypes from 'prop-types';

import MyButton from 'components/base/MyButton';

import { MENU_LIST } from './constants';

import classes from './index.module.css';

const Navbar = ({ isSidebarOpen, actionToggleSidebar }) => {
  const navbarRef = useRef(null);
  const classNames = [classes.navbar];
  if (isSidebarOpen) classNames.push(classes.whiteNavbar);

  const handleNavbarChangeOnScroll = useCallback(() => {
    const offsetTop = window.pageYOffset || document.documentElement.scrollTop;
    if (
      (offsetTop >= 540 && window.innerWidth >= 560) ||
      (offsetTop >= 315 && window.innerWidth < 560)
    ) {
      navbarRef.current.classList.add(classes.whiteNavbar);
    } else navbarRef.current.classList.remove(classes.whiteNavbar);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleNavbarChangeOnScroll);

    return () => window.removeEventListener('scroll', handleNavbarChangeOnScroll);
  }, [handleNavbarChangeOnScroll]);

  return (
    <header ref={navbarRef} className={classNames.join(' ')}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="flex-start"
        wrap="nowrap"
        className={classes.navbarDesktopContentWrapper}
      >
        <Grid item className={classes.hamburger} onClick={actionToggleSidebar}>
          <MenuIcon sx={{ fontSize: 20 }} />
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          justifyContent="space-between"
          columnSpacing={4}
          wrap="nowrap"
        >
          <Grid
            item
            container
            columnSpacing={1}
            alignItems="center"
            className={classes.navbarTitle}
            md={3}
            xs={12}
          >
            <Grid item className={classes.hotelLogo}>
              <ApartmentIcon sx={{ fontSize: 40 }} />
            </Grid>
            <Grid item>
              <h4>Hotel Name</h4>
            </Grid>
          </Grid>
          <Grid
            container
            item
            className={classes.navbarDesktopContent}
            flexDirection="column"
            md={9}
            xs={12}
          >
            <Grid item>
              <Grid
                container
                justifyContent="flex-end"
                className={classes.navbarDesktopContentTop}
                columnSpacing={3}
              >
                <Grid item>
                  <Grid container alignItems="center" spacing={1} wrap="nowrap">
                    <Grid item container xs alignItems="center">
                      <PublicIcon />
                    </Grid>
                    <Grid item>
                      <span>ENGLISH</span>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container alignItems="center" spacing={1} wrap="nowrap">
                    <Grid item container xs alignItems="center">
                      <PersonIcon />
                    </Grid>
                    <Grid item>
                      <span>SIGN IN</span>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              item
              columnSpacing={3}
              justifyContent="flex-end"
              alignItems="center"
              className={classes.navbarDesktopContentBottom}
            >
              {MENU_LIST.map(({ name, path }) => (
                <Grid item key={name}>
                  <Link href={path}>
                    <a>{name}</a>
                  </Link>
                </Grid>
              ))}
              <Grid item>
                <MyButton theme="transparent" className={classes.reserveNow}>
                  <span>RESERVE NOW</span>
                </MyButton>
              </Grid>
            </Grid>
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
