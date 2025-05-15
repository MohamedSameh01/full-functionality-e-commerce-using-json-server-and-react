
import { TProduct } from "@customTypes/product";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {axiosErrorHandler} from "@util";
import axios from "axios";

type TResponse = TProduct[];
const actGetWishlist = createAsyncThunk(
  "wishlist/getWishlist",
  async (__reactRouterVersion, thunkApi) => {
    const { rejectWithValue ,fulfillWithValue,signal} = thunkApi;
    try {
      const userWishlist = await axios.get<{ productId: number }[]>(
        `/wishlist?userId=1`,
        { signal }
      );
      if(!userWishlist.data.length){
        return fulfillWithValue([]);
      }
      const concatenatedItemsId=userWishlist.data.map((el)=>`id=${el.productId}`).join("&");

      const response = await axios.get<TResponse>(
        `/products?${concatenatedItemsId}`
      );
        return response.data;

    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetWishlist;