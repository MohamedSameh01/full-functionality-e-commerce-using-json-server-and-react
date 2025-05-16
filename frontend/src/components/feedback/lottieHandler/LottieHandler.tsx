import Lottie from "lottie-react";
import notFound from "@assets/lottieFiles/notFound.json";
import empty from "@assets/lottieFiles/empty.json";
import error from "@assets/lottieFiles/error.json";
import loading from "@assets/lottieFiles/loading.json";

interface ILottieProps {
  type: keyof typeof LottieType;
  message?: string;
}
const LottieType = {
  notFound,
  empty,
  error,
  loading,
};
const LottieHandler = ({ type, message }: ILottieProps) => {
    const Component = LottieType[type]
  return (
    <div
      className=" d-flex justify-content-center align-items-center flex-column "
      style={type==="notFound"?{ marginTop: "-15%"}:{}}
    >
      <Lottie animationData={Component} loop={true} style={{width:"400px"}} />
      {message&&<p>{message}</p>}
    </div>
  );
};

export default LottieHandler;
