import { TProduct } from "@customTypes/product";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import {axiosErrorHandler} from "@util";
import axios  from "axios";

type TResponse = TProduct[];

const actGetProductsByItems = createAsyncThunk(
  "cart/actGetProductsByItems",
  async (_, thunkApi) => {
    const { getState, rejectWithValue, fulfillWithValue,signal } = thunkApi;
    const { cart } = getState() as RootState;

    const itemsId = Object.keys(cart.items);
    if (!itemsId.length) {
      return fulfillWithValue([]);
    }
    try {
      const concatenatedItemsId = itemsId.map((el) => `id=${el}`).join("&");
      const response = await axios.get<TResponse>(
        `/products?${concatenatedItemsId}`,
        { signal }
      );
      return response.data;
    } catch (error) {
      return  rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetProductsByItems;
