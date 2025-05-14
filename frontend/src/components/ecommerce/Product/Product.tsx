import { useEffect, useState, memo } from "react";
import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/cart/cartSlice";
import { actLikeToggle } from "@store/wishlist/wishlistSlice";
import { Button, Spinner } from "react-bootstrap";
import Like from "@assets/svg/like.svg?react";
import LikeFill from "@assets/svg/like-fill.svg?react";
import { TProduct } from "@customTypes/product";

import styles from "./style.module.css";
const { product, productImg, maximumNotice, wishlistBtn } = styles;

const Product = memo(
  ({ id, title, price, img, max, quantity, isLiked }: TProduct) => {
    const dispatch = useAppDispatch();
    const [isBtnDisabled, setIsBtnDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const currentRemainingQuantity = max - (quantity ?? 0);
    const quantityReachedToMax = currentRemainingQuantity <= 0 ? true : false;

    useEffect(() => {
      if (!isBtnDisabled) {
        return;
      }

      const debounce = setTimeout(() => {
        setIsBtnDisabled(false);
      }, 300);

      return () => clearTimeout(debounce);
    }, [isBtnDisabled]);

    const addToCartHandler = () => {
      dispatch(addToCart(id));
      setIsBtnDisabled(true);
    };

    const likeToggleHandler = () => {
      // to stop the multi request if the user like or dislike it will wait till the action done
      if (loading) {
        return;
      }
      setLoading(true);
      dispatch(actLikeToggle(id))
        .unwrap()
        .then(() => {
          setLoading(false);
        })
        .catch((err) => {
          if (err) {
            setLoading(false);
          }
        });
    };

    console.log("render product");
    return (
      <div className={product}>
        <div className={wishlistBtn} onClick={likeToggleHandler}>
          {loading ? (
            <Spinner animation="border" size="sm" color="primary" />
          ) : isLiked ? (
            <LikeFill />
          ) : (
            <Like />
          )}
        </div>
        <div className={productImg}>
          <img src={img} alt={title} />
        </div>
        <h2>{title}</h2>
        <h3>{price.toFixed(2)} EGP</h3>
        <p className={maximumNotice}>
          {quantityReachedToMax
            ? "You reach to the limit"
            : `You can add ${currentRemainingQuantity} item(s)`}
        </p>
        <Button
          variant="info"
          style={{ color: "white" }}
          onClick={addToCartHandler}
          disabled={isBtnDisabled || quantityReachedToMax}
        >
          {isBtnDisabled ? (
            <>
              <Spinner animation="border" size="sm" /> Loading...
            </>
          ) : (
            "Add to cart"
          )}
        </Button>
      </div>
    );
  }
);

export default Product;
