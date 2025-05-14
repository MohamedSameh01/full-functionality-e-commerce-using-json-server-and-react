import { createSlice } from "@reduxjs/toolkit";
import actLikeToggle from "./act/actLikeToggle";
import actGetWishlist from "./act/actGetWishlist";
import { TLoading } from "@customTypes/shared";
import { TProduct } from "@customTypes/product";

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
      }
    });
    builder.addCase(actLikeToggle.rejected, (state, action) => {
      state.error = action.payload as string;
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
      state.error = action.payload as string;
    });
  },
});

export {actLikeToggle,actGetWishlist}
export const { productsFullInfoCleanUp } = wishlistSlice.actions;
export default wishlistSlice.reducer;
