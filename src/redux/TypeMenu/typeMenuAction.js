import { createAsyncThunk } from "@reduxjs/toolkit";
import TypeMenuApi from "../../services/typeMenuAPI";

const FETCH_TYPE_MENU = "app/fetch_type_menu";

export const fetchTypeMenu = createAsyncThunk(
  FETCH_TYPE_MENU,
  async (payload, { rejectWithValue, fulfillWithValue }) => {
    try {
      const getTypeMenu = await TypeMenuApi.get();
      const typeMenu = getTypeMenu.data;
      console.log("action-type-menu", typeMenu);
      return fulfillWithValue(typeMenu);
    } catch (error) {
      console.log("fetch-type-menu-failed", error);
      rejectWithValue(error);
    }
  }
);
