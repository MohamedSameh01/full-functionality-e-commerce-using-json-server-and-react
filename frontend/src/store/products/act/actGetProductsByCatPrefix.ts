import { createAsyncThunk } from "@reduxjs/toolkit";
import { TProduct } from "@customTypes/product";
import axios from "axios";
import {axiosErrorHandler} from "@util";
type TResponse = TProduct[];
const actGetProductsByCatPrefix = createAsyncThunk(
  "products/actGetProductsByCatPrefix",
  async (prefix:string, thunkApi) => {
    const { rejectWithValue ,signal} = thunkApi;
    try {
      const response = await axios.get<TResponse>(
        `/products?cat_prefix=${prefix}`,
        { signal }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetProductsByCatPrefix;

