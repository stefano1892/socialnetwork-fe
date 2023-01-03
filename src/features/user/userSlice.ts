import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface UserState {
  name: string;
  surname: string;
  email: string;
  password: string;
}

const initialState: UserState = {
  name: '',
  surname: '',
  email: '',
  password: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setFullUser: (state, action) => {
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const { setFullUser } = userSlice.actions;

export const selectUserValues = (state: RootState) => state.user;

export default userSlice.reducer;
