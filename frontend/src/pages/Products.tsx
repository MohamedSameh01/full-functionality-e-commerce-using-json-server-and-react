
import { GridList, Heading } from "@components/common";
import { Product } from "@components/ecommerce";
import { Loading } from "@components/feedback";
import { TProduct } from "@customTypes/product";
import useProducts from "@hooks/useProducts";

const Products = () => {
  const { loading, error, productsFullInfo, productPrefix } = useProducts();
 
  return (
    <>
      <Heading>
        <span className="text-capitalize ">{productPrefix} Products</span>
      </Heading>
      <Loading status={loading} error={error} type="products">
        <GridList<TProduct>
          records={productsFullInfo}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  );
};

export default Products;
