import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface UserState {
  id: number;
  name: string;
  secondName?: string;
  surname: string;
  email: string;
  password: string;
  phoneNumber: string;
  birthDate: string;
}

const initialState: UserState = {
  id: 0,
  name: '',
  surname: '',
  secondName: '',
  email: '',
  password: '',
  phoneNumber: '',
  birthDate: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setFullUser: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.phoneNumber = action.payload.phoneNumber;
      state.birthDate = action.payload.birthDate
    },
  },
});

export const { setFullUser } = userSlice.actions;

export const selectUserValues = (state: RootState) => state.user;

export default userSlice.reducer;
