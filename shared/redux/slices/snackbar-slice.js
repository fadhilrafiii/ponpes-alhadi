import { createSlice } from '@reduxjs/toolkit';

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState: {
    isOpen: false,
    message: '',
    type: null,
  },
  reducers: {
    showSnackbar: (state, action) => {
      state.isOpen = true;
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
    hideSnackbar: (state) => {
      state.isOpen = false;
      state.message = '';
      state.type = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showSnackbar, hideSnackbar } = snackbarSlice.actions;
export const selectSnackbar = (state) => state.snackbar;

export default snackbarSlice.reducer;
