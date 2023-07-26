import { configureStore } from '@reduxjs/toolkit'
import links from './slices/linksSlice';


export const store = configureStore({
  reducer: {
    links: links,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
