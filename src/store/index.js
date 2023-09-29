import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slice/user'
import trackSlice from './slice/tracks'
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    track:trackSlice.reducer
  },
})

  