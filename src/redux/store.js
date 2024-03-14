import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Auth/authSlice.js";
import TypeMenuReducer from "./TypeMenu/typeMenuSlice.js";
import DishGroupReducer from "./DishGroup/DishGroupSlice.js";
import DishListReducer from "./DishList/dishListSlice.js";
export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    dishList: DishListReducer,
    typeMenu: TypeMenuReducer,
    dishGroup: DishGroupReducer,
  },
});
