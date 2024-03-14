import { createAsyncThunk } from "@reduxjs/toolkit";
import ProductAPI from "../../services/productAPI";

const FETCH_DISH_LIST = "app/dishList";

export const fetchDishList = createAsyncThunk(
  FETCH_DISH_LIST,
  async (payload, { rejectWithValue, fulfillWithValue }) => {
    try {
      const fetchDishList = await ProductAPI.get();
      const dishList = fetchDishList.data;
      return fulfillWithValue(dishList);
    } catch (error) {
      console.log("fetch-dish-list", error);
      rejectWithValue(error);
    }
  }
);
