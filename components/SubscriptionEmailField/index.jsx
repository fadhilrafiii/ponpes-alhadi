import { memo } from 'react';

import { Grid } from '@mui/material';

import MyButton from 'components/base/MyButton';

import classes from './index.module.css';

const SubscriptionEmailField = memo(() => {
  return (
    <Grid container className={classes.emailFieldContainer} justifyContent="flex-end">
      <Grid item xs={12} md={8} lg={6}>
        <div className={classes.emailField}>
          <input placeholder="Enter your email address for promotion & news" />
          <MyButton theme="tertiary" className={classes.signUpButton}>
            SIGN UP
          </MyButton>
        </div>
      </Grid>
    </Grid>
  );
});

export default SubscriptionEmailField;
