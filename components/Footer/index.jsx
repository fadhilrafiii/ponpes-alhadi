import { memo } from 'react';

import { Facebook, Instagram, Mail, Twitter, YouTube } from '@mui/icons-material';
import { Grid } from '@mui/material';

import SubscriptionEmailField from 'components/SubscriptionEmailField';

import classes from './index.module.css';

const Footer = memo(() => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContent}>
        <SubscriptionEmailField />
      </div>
      <Grid container className={classes.footerBottom} justifyContent="space-between">
        <Grid item xs={12} md={8}>
          HOTEL® is a Registered Service Mark of The Ritz Hotel, Limited, and is used by The Hotel
          Name Company under License. © 2022 The Hotel Name Company, L.L.C. All rights reserved.
        </Grid>
        <Grid item xs={12} md="auto">
          <Grid container spacing={1} wrap="nowrap">
            <Grid item>
              <Facebook color="primary" sx={{ fontSize: 22 }} />
            </Grid>
            <Grid item>
              <Twitter color="primary" sx={{ fontSize: 22 }} />
            </Grid>
            <Grid item>
              <YouTube color="primary" sx={{ fontSize: 22 }} />
            </Grid>
            <Grid item>
              <Instagram color="primary" sx={{ fontSize: 22 }} />
            </Grid>
            <Grid item>
              <Mail color="primary" sx={{ fontSize: 22 }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
});

export default Footer;
