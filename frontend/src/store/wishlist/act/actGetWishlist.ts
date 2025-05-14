
import { TProduct } from "@customTypes/product";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

type TResponse = TProduct[];
const actGetWishlist = createAsyncThunk(
  "wishlist/getWishlist",
  async (__reactRouterVersion, thunkApi) => {
    const { rejectWithValue ,fulfillWithValue} = thunkApi;
    try {
      const userWishlist = await axios.get<{productId:number}[]>(`/wishlist?userId=1`);
      if(!userWishlist.data.length){
        return fulfillWithValue([]);
      }
      const concatenatedItemsId=userWishlist.data.map((el)=>`id=${el.productId}`).join("&");

      const response = await axios.get<TResponse>(
        `/products?${concatenatedItemsId}`
      );
        return response.data;

    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("Something went wrong");
      }
    }
  }
);

export default actGetWishlist;