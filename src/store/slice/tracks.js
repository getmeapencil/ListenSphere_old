import { createSlice } from "@reduxjs/toolkit";
// create a slice to store data of user
const trackSlice = createSlice({
  name: "track",
  initialState: {
    track: null,
  },
  reducers: {
    setTrack: (state, action) => {
      state.track = action.payload;
    },  
    updateTrack: (state, action) => {
      state.track = action.payload;
    },
  },
});
export default trackSlice;
export const trackActions = trackSlice.actions;
