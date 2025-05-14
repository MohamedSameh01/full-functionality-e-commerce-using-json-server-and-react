/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/categories/categoriesSlice";
import { Container, Row } from "react-bootstrap";
import { GridList,Heading } from "@components/common";
import { Category } from "@components/ecommerce";
import { Loading } from "@components/feedback";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { error, loading, records } = useAppSelector(
    (state) => state.categories
  );
  useEffect(() => {
    if (records.length === 0) {
      dispatch(actGetCategories());
    }
  }, [dispatch]);

  
  return (
    <Container>
      <Heading>Categories</Heading>
      <Loading status={loading} error={error}>
        <GridList
          records={records}
          renderItem={(record) => <Category {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Categories;
