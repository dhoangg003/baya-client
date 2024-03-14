import { createSlice } from "@reduxjs/toolkit";
import { fetchTypeMenu } from "./typeMenuAction";

const initialState = {
  fetchTypeMenuPending: false,
  fetchTypeMenuError: null,
  typeMenu: [],
  error: null,
};

const typeMenuSlice = createSlice({
  name: "typeMenu",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTypeMenu.pending, (state) => {
        state.fetchTypeMenuPending = true;
        state.error = null;
      })
      .addCase(fetchTypeMenu.fulfilled, (state, { payload }) => {
        state.typeMenu = payload;
        state.fetchTypeMenuPending = false;
      })
      .addCase(fetchTypeMenu.rejected, (state, { payload }) => {
        state.fetchTypeMenuPending = false;
        state.fetchTypeMenuError = payload;
      });
  },
});

export default typeMenuSlice.reducer;
