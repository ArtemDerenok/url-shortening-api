import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import axios from 'axios';


interface ILinksSlice {
  links: [string[]];
}

const initState = () => {
  const data = localStorage.getItem('links');
  if (data !== null) {
    return JSON.parse(data);
  }
  return [];
}

const initialState: ILinksSlice = {
  links: initState(),
}

export const getLink = createAsyncThunk(
  'links/getLink',
  async (link: string) => {
    const response = await axios.get(`https://api.shrtco.de/v2/shorten?url=${link}`)
    return [response.data.result.full_short_link, response.data.result.original_link]
  }
)

export const linksSlice = createSlice({
  name: 'links',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLink.fulfilled, (state, action: PayloadAction<string[]>) => {
      state.links.push(action.payload);
    });
  }
})

export const { } = linksSlice.actions;

export default linksSlice.reducer
