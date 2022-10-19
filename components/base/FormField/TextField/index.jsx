import { TextField as MuiTextField } from '@mui/material';

import { baseFormControlStyles } from '../constants';

const TextField = (props) => {
  return <MuiTextField {...props} sx={baseFormControlStyles} />;
};

export default TextField;
