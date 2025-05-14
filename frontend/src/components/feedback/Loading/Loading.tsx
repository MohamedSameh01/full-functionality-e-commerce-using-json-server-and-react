/* eslint-disable @typescript-eslint/no-unused-vars */
import { TLoading } from "@customTypes/shared"

type LoadingProps={
  status:TLoading,
  error:null|string,
  children:React.ReactNode
}


const Loading = ({ status, error, children }: LoadingProps) => {
  if (status === "pending") {
    return <p>Loading please wait</p>;
  }
  if (status === "failed") {
    return <p>error {error}</p>;
  }
  return <>{children}</>;
};

export default Loading