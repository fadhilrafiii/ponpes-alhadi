import { COLORS } from 'constants/colors';

export const baseFormControlStyles = {
  '& .MuiInputBase-root': {
    borderBottom: '1px solid ' + COLORS.Primary40,
    color: COLORS.Primary,
    padding: '0 4px',

    '&:after': {
      bottom: '-1px',
      borderBottom: '1px solid ' + COLORS.Primary,
    },
  },
};
