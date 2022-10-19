import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Grid } from '@mui/material';

import Link from 'next/link';

import CheckBoxes from 'components/base/FormField/CheckBoxes';
import Select from 'components/base/FormField/Select';
import TextField from 'components/base/FormField/TextField';
import MyButton from 'components/base/MyButton';

import { COLORS } from 'constants/colors';

import {
  IS_FLEXIBLE_DATE_OPTIONS, // IS_FLEXIBLE_DATE_OPTIONS,
  LOCATION_OPTIONS,
  TOTAL_GUEST_OPTIONS,
  TOTAL_ROOM_OPTIONS,
  USE_REWARD_POINTS_OPTIONS,
} from './constants';
import { useForm } from './utils';

import classes from './index.module.css';

const ReservationForm = () => {
  const { handleSubmit, handleChange, values, touched, errors } = useForm();
  return (
    <div className={classes.container}>
      <div className={classes.formContainer}>
        <h3 className={classes.reservationFormTitle}>MAKE A RESERVATION</h3>
        <form onSubmit={handleSubmit}>
          <Grid container rowSpacing={2} columnSpacing={4}>
            <Grid
              item
              container
              xs={12}
              md={8}
              flexDirection="column"
              rowSpacing={2}
              columnSpacing={4}
            >
              <Grid item>
                <Select
                  name="location"
                  variant="standard"
                  value={values.location}
                  onChange={handleChange}
                  options={LOCATION_OPTIONS}
                  placeholder="Choose Location"
                  error={touched.location && Boolean(errors.location)}
                  helperText={touched.location && errors.location}
                  IconComponent={LocationOnIcon}
                />
              </Grid>
              <Grid item container flexDirection="row-reverse" rowSpacing={2} columnSpacing={4}>
                <Grid item xs={12} md={6}>
                  <CheckBoxes
                    name="isFlexible"
                    values={values.isFlexible}
                    onChange={handleChange}
                    options={IS_FLEXIBLE_DATE_OPTIONS}
                    sx={{ color: COLORS.Primary70, '& .MuiTypography-root': { fontSize: 12 } }}
                  />
                </Grid>
                <Grid item xs={12} md={6} container rowSpacing={2} columnSpacing={2}>
                  <Grid item xs={12} md={6}>
                    <Select
                      name="totalRoom"
                      variant="standard"
                      value={values.totalRoom}
                      onChange={handleChange}
                      options={TOTAL_ROOM_OPTIONS}
                      placeholder="Rooms"
                      error={Boolean(errors.totalRoom)}
                      helperText={errors.totalRoom}
                      IconComponent={KeyboardArrowDown}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Select
                      variant="standard"
                      name="totalGuest"
                      value={values.totalGuest}
                      onChange={handleChange}
                      options={TOTAL_GUEST_OPTIONS}
                      placeholder="Guests"
                      error={Boolean(errors.totalGuest)}
                      helperText={errors.totalGuest}
                      IconComponent={KeyboardArrowDown}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item container spacing={2} rowSpacing={2} columnSpacing={4}>
                <Grid item xs={12} md={6}>
                  <TextField
                    variant="standard"
                    fullWidth
                    name="referralCode"
                    value={values.referralCode}
                    onChange={handleChange}
                    placeholder="Code (Optional)"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <CheckBoxes
                    name="useRewardPoints"
                    values={values.useRewardPoints}
                    onChange={handleChange}
                    options={USE_REWARD_POINTS_OPTIONS}
                    sx={{
                      color: COLORS.Primary70,
                      '& .MuiTypography-root': { fontSize: 12 },
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item container xs={12} md={4} flexDirection="column" rowSpacing={2}>
              <Grid item>
                <MyButton type="submit" fullWidth theme="tertiary">
                  CHECK AVAILABILITY
                </MyButton>
              </Grid>
              <Grid item className={classes.linkGroup}>
                <Link href="/">
                  <a className={classes.link}>VIEW EXISTINGS RESERVATIONS</a>
                </Link>
                <Link href="/">
                  <a className={classes.link}>BOOK HOTEL, AIRFARE &#38;, CAR TOGETHER</a>
                </Link>
                <Link href="/">
                  <a className={classes.link}>RESERVE BY PHONE</a>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
