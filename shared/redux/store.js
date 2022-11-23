import { configureStore } from '@reduxjs/toolkit';

import clientStateReducer from './slices/client-state-slice';
import snackbarReducer from './slices/snackbar-slice';
import userReducer from './slices/user-slice';

const store = configureStore({
  reducer: {
    snackbar: snackbarReducer,
    user: userReducer,
    clientState: clientStateReducer,
  },
});

export default store;
