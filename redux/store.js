import { configureStore } from '@reduxjs/toolkit';

import snackbarReducer from './slices/snackbar-slice';
import userReducer from './slices/user-slice';

const store = configureStore({
  reducer: {
    snackbar: snackbarReducer,
    user: userReducer,
  },
});

export default store;
