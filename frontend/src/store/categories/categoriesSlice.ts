/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./act/actGetCategories";
import { TLoading } from "@customTypes/shared";
import { TCategory } from "@customTypes/category";
import { isString } from "@customTypes/guard";

interface ICategoriesState {
  records: TCategory[];
  loading: TLoading;
  error: null | string;
}
const initialState: ICategoriesState = {
  records: [],
  loading: "idle",
  error: null,
};
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    categoriesCleanUp: (state) => {
      state.records = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetCategories.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetCategories.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(actGetCategories.rejected, (state, action) => {
      state.loading = "failed";
      // this if state ment to guard that the data should be string
      // if (action.payload && typeof action.payload === "string") {
      //   state.error = action.payload;
      // }
      // or this soluton
      if (isString(action.payload)) {
        state.error = action.payload;
      }
      // also u can write it without the if condition
      // state.error = action.payload as string;
    });
  },
});

export { actGetCategories };
export default categoriesSlice.reducer;
