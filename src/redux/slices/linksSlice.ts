import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface ILinksSlice {
  links: string[];
}

const initialState: ILinksSlice = {
  links: []
}

export const linksSlice = createSlice({
  name: 'links',
  initialState,
  reducers: {
    addLink: (state, action: PayloadAction<string>) => {
      state.links.push(action.payload);
    }
  }
})

export const { addLink } = linksSlice.actions;

export default linksSlice.reducer
