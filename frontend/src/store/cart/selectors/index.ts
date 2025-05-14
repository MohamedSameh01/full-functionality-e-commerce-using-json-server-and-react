import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@store/index";

export const getCartTotalQuantity = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    // console.log("fire");
    const totalQuantity = Object.values(items).reduce(
      (acculator, currentValue) => {
        return acculator + currentValue;
      },
      0
    );
    return totalQuantity;
  }
);
