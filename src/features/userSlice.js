import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    imgUrl: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    setImageUrl: (state, action) => {
      state.imgUrl = action.payload;
    }
  },
});

export const { login, logout, setImageUrl } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectImgUrl = (state) => state.user.imgUrl;

export default userSlice.reducer;
