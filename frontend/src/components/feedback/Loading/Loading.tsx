/* eslint-disable @typescript-eslint/no-unused-vars */
import { TLoading } from "@customTypes/shared"
import CategorySkeleton from "../skeletons/CategorySkeleton/CategorySkeleton";
import CartSkeleton from "../skeletons/CartSkeleton/CartSkeleton";
import ProductSkeleton from "../skeletons/ProductSkeleton/ProductSkeleton";
import LottieHandler from "../lottieHandler/LottieHandler";
type LoadingProps = {
  status: TLoading;
  error: null | string;
  children: React.ReactNode;
  type?: keyof typeof skeletonsTypes;
};

const skeletonsTypes={
  cart:CartSkeleton,
  category:CategorySkeleton,
  products:ProductSkeleton,
}

const Loading = ({ status, error, children ,type="category"}: LoadingProps) => {

  const Component = skeletonsTypes[type];

  if (status === "pending") {
    return <Component/>;
  }
  if (status === "failed") {
    return <LottieHandler type="error" message={error as string} />;
  }
  return <>{children}</>;
};

export default Loading