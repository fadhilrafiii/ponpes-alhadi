import { COLORS } from 'constants/colors';

export const baseSelectStyles = {
  '& .MuiSelect-select': {
    paddingTop: '7px',
    paddingBottom: '8px',
  },
  '& .MuiSvgIcon-root': {
    color: COLORS.Primary,
  },
  '& .MuiSelect-iconOpen': {
    transform: 'rotate(0deg)',
  },
};

export const menuProps = {
  sx: {
    '& .MuiMenuItem-root': {
      minHeight: '40px',
    },
  },
};
