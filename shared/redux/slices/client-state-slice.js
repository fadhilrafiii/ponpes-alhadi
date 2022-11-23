import { createSlice } from '@reduxjs/toolkit';

const clientStateSlice = createSlice({
  name: 'clientState',
  initialState: {
    isClientLoading: false,
    isClientReady: false,
  },
  reducers: {
    setClientLoading: (state, action) => {
      state.isClientLoading = action.payload;
    },
    setIsClientReady: (state, action) => {
      state.isClientReady = action.payload;

      if (action.payload) state.isClientLoading = false;
    },
  },
});

export const { setClientLoading, setIsClientReady } = clientStateSlice.actions;
export const selectClientState = (state) => state.clientState;

const clientStateReducer = clientStateSlice.reducer;
export default clientStateReducer;
