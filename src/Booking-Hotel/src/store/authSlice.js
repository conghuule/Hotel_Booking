import { signOut } from 'firebase/auth';
import { auth } from 'services/config';

const { createSlice } = require('@reduxjs/toolkit');

const data = JSON.parse(localStorage.getItem('auth'));
const initialState = data?.user
  ? { user: data.user, isLogin: true }
  : { user: null, isLogin: false };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signin: (state, action) => {
      const data = action.payload;

      localStorage.setItem('auth', JSON.stringify({ user: data }));

      state.user = data;
      state.isLogin = true;
    },
    updateProfile: (state, action) => {
      const data = action.payload;

      state.user.data = data;
    },
    signout: (state, action) => {
      localStorage.setItem('auth', JSON.stringify({ user: null }));

      state.user = null;
      state.isLogin = false;
      signOut(auth);
    },
  },
});

const { actions, reducer } = authSlice;

export const { signin, signout, updateProfile } = actions;

export default reducer;
