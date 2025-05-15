import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetProductsByCatPrefix,
  productsCleanUp,
} from "@store/products/productsSlice";

const useProducts = () => {
  const params = useParams();
  const productPrefix=params.prefix;
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);
  const cartItems = useAppSelector((state) => state.cart.items);
  const wishListItemsId = useAppSelector((state) => state.wishlist.itemsId);

  const productsFullInfo = records.map((el) => ({
    ...el,
    quantity: cartItems[el.id] || 0,
    isLiked: wishListItemsId.includes(el.id),
  }));

  useEffect(() => {
    const promise=dispatch(actGetProductsByCatPrefix(productPrefix as string));

    return () => {
      dispatch(productsCleanUp());
      promise.abort();
    };
  }, [dispatch, productPrefix]);

  return { loading, error, productsFullInfo, productPrefix };
};

export default useProducts;
