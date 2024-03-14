import { createSlice } from "@reduxjs/toolkit";
import { fetchDishGroup } from "./DishGroupAction";

const initialState = {
  dishGroup: [],
  fetchdishGroupPending: false,
  fetchdishGroupError: false,
  error: null,
};

const dishGroupSlice = createSlice({
  name: "dishGroup",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchDishGroup.pending, (state) => {
        state.fetchdishGroupPending = true;
        state.error = null;
      })
      .addCase(fetchDishGroup.fulfilled, (state, { payload }) => {
        state.dishGroup = payload;
        state.fetchdishGroupPending = false;
      })
      .addCase(fetchDishGroup.rejected, (state, { payload }) => {
        state.fetchdishGroupError = payload;
        state.fetchdishGroupPending = false;
      });
  },
});

export default dishGroupSlice.reducer;
