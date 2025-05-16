import React, { Suspense } from "react";
import LottieHandler from "../lottieHandler/LottieHandler";

const SusbenseHandler = ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={<LottieHandler type="loading"/>}>{children}</Suspense>;
};

export default SusbenseHandler;
