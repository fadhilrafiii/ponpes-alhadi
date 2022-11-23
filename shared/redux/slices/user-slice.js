import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    profile: {},
  },
  reducers: {
    setUserProfile: (state, action) => {
      state.profile = action.payload;
    },
    removeUserProfile: (state) => {
      state.profile = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserProfile, removeUserProfile } = userSlice.actions;
export const selectUserProfile = (state) => state.user.profile;

export default userSlice.reducer;
