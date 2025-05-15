import { createSlice } from "@reduxjs/toolkit";
import actLikeToggle from "./act/actLikeToggle";
import actGetWishlist from "./act/actGetWishlist";
import { TLoading } from "@customTypes/shared";
import { TProduct } from "@customTypes/product";
import { isString } from "@customTypes/guard";

interface IWishlistState {
    itemsId:number[]
    error:string|null,
    loading:TLoading,
    productsFullInfo:TProduct[],

   
}

const initialState: IWishlistState = {
  itemsId: [],
  error: null,
  loading:"idle",
  productsFullInfo:[]
};

const wishlistSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    productsFullInfoCleanUp:(state)=>{
        state.productsFullInfo=[]
    }
  },
  extraReducers: (builder) => {
    builder.addCase(actLikeToggle.pending, (state) => {
      state.error;
    });
    builder.addCase(actLikeToggle.fulfilled, (state, action) => {
      const { type, id } = action.payload;
      if (type === "add") {
        state.itemsId.push(id);
      } else {
        state.itemsId = state.itemsId.filter((el) => el !== id);
        state.productsFullInfo=state.productsFullInfo.filter((el) => el.id !== id);
      }
    });
    builder.addCase(actLikeToggle.rejected, (state, action) => {
         if (isString(action.payload)) {
          state.error = action.payload;
         }
    });
    // actGetwishList
    builder.addCase(actGetWishlist.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetWishlist.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.productsFullInfo = action.payload;
    });
    builder.addCase(actGetWishlist.rejected, (state, action) => {
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export {actLikeToggle,actGetWishlist}
export const { productsFullInfoCleanUp } = wishlistSlice.actions;
export default wishlistSlice.reducer;
