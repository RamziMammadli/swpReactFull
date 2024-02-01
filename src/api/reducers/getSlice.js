import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataThunk = createAsyncThunk("api/data", async () => {
  const response = await axios.get(
    "https://63b29e7e5901da0ab368fe8b.mockapi.io/eproducts/basket"
  );
  return response.data;
});

export const postThunk =createAsyncThunk("api/post", async (data) => {
    const response = await axios.post('https://63b29e7e5901da0ab368fe8b.mockapi.io/eproducts/basket', data)
    return response.data
})

const getDataSlice = createSlice({
  name: "getData",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getDataThunk.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload
    })
    .addCase(getDataThunk.pending, (state) => {
        state.loading = true
    })
    .addCase(getDataThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
    })
    .addCase(postThunk.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload
    })
    .addCase(postThunk.pending, (state) => {
        state.loading = true
    })
    .addCase(postThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
    })
  },
});

export default getDataSlice.reducer
