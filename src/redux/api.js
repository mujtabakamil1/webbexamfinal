// src/redux/apiReducer.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchDataByCategory = createAsyncThunk(
  'data/fetchDataByCategory',
  async (category) => {
    const response = await axios.get(`https://emojihub.yurace.pro/api/all/category/${category}`);
    return response.data;
  }
);

const apiSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      
      .addCase(fetchDataByCategory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDataByCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchDataByCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default apiSlice.reducer;
