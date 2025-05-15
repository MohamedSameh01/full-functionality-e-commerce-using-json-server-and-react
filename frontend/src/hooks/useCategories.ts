import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/categories/categoriesSlice";

const useCategories = () => {
      const dispatch = useAppDispatch();
      const { error, loading, records } = useAppSelector(
        (state) => state.categories
      );
      useEffect(() => {
        if (records.length === 0) {
          dispatch(actGetCategories());
        }
      }, [dispatch]);
  return { error, loading, records };
}

export default useCategories