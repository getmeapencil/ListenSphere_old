import { createSlice } from "@reduxjs/toolkit";
// create a slice to store data of user
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    },
  },
});
export default userSlice;
export const userActions = userSlice.actions;
