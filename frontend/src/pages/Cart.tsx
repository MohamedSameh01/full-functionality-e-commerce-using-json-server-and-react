import { Heading } from "@components/common";
import { Loading } from "@components/feedback";
import { CartItemList, CartSubtotalPrice } from "@components/ecommerce";
import useCart from "@hooks/useCart";

const Cart = () => {
  const { loading, error, products, changeQuantityHandler, removeItemHandler } =
    useCart();
  return (
    <>
      <Heading title="Your Cart" />
      <Loading status={loading} error={error} type="cart">
        <CartItemList
          products={products}
          changeQuantityHandler={changeQuantityHandler}
          removeItemHandler={removeItemHandler}
        />
        <CartSubtotalPrice products={products} />
      </Loading>
    </>
  );
};

export default Cart;
