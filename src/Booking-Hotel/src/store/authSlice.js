import { signOut } from 'firebase/auth';
import { auth } from 'services/config';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: null,
  isLogin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signin: (state, action) => {
      const data = action.payload;

      state.user = data;
      state.isLogin = true;
    },
    signout: (state, action) => {
      state.user = null;
      state.isLogin = false;
      signOut(auth);
    },
  },
});

const { actions, reducer } = authSlice;

export const { signin, signout } = actions;

export default reducer;
