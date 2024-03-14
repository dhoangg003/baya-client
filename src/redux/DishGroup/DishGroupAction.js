import { createAsyncThunk } from "@reduxjs/toolkit";
import dishGroupApi from "../../services/dishGroupAPI";

const FETCH_DISH_GROUP = "app/dishGroup";

export const fetchDishGroup = createAsyncThunk(
  FETCH_DISH_GROUP,
  async (payload, { rejectWithValue, fulfillWithValue }) => {
    try {
      const fetchDishGroup = await dishGroupApi.get();
      const dishGroup = fetchDishGroup.data;
      return fulfillWithValue(dishGroup);
    } catch (error) {
      console.log("fetch-dish-group-failed", error);
      rejectWithValue(error);
    }
  }
);
