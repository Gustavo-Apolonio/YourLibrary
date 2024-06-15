import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Interfaces } from "../../../models";

export const initialState: Interfaces.IUser = {
  id: undefined,
  username: undefined,
  email: undefined,
  password: undefined,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<Interfaces.IUser>) {
      Object.assign(state, action.payload);
    },
    clearUser(state) {
      Object.assign(state, initialState);
    },
  },
});

export const { actions, reducer } = userSlice;
