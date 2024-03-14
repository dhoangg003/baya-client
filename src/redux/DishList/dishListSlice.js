import { createSlice } from "@reduxjs/toolkit";
import { fetchDishList } from "./dishListAction";

const initialState = {
  dishList: [],
  loading: false,
  fetchDishListPending: false,
  fetchDishListError: null,
  error: null,
};

const dishListSlice = createSlice({
  name: "dishList",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchDishList.pending, (state) => {
        state.fetchDishListPending = true;
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchDishList.fulfilled, (state, { payload }) => {
        state.dishList = payload;
        state.fetchDishListPending = false;
        state.loading = false;
      })
      .addCase(fetchDishList.rejected, (state, { payload }) => {
        state.fetchDishListError = payload;
        state.fetchDishListPending = false;
      });
  },
});

export default dishListSlice.reducer;
