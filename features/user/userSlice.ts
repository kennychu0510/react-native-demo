import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../../app/store';

// Define a type for the slice state
interface UserState {
  isLoggedIn: boolean;
}

// Define the initial state using that type
const initialState: UserState = {
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    login: state => {
      state.isLoggedIn = true;
    },
    logout: state => {
      state.isLoggedIn = false;
    },
  },
});

export const {login, logout} = userSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
export const loginStatus = (state: RootState) => state.user.isLoggedIn;

export default userSlice.reducer;
