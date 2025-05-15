import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

const actLikeToggle = createAsyncThunk(
  "wishlist/actLikeToggle",
  async (id: number, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
        const isRecordExist = await axios.get(`/wishlist?userId=1&productId=${id}`);
        if(isRecordExist.data.length>0) {
            await axios.delete(`/wishlist/${isRecordExist.data[0].id}`);    
            return {type:"remove",id};

        }else{
            await axios.post(`/wishlist`, { userId: 1, productId: id });
            return {type:"add",id}; 
        }

    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("Something went wrong");
      }
    }
  }
);

export default actLikeToggle;
