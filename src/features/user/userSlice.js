import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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

export const selectUserValues = (state) => state.user;

export default userSlice.reducer;
