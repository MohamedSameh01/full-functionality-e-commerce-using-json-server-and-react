import { isAxiosError } from "axios";    

const axiosErrorHandler = (error: unknown) => {
    if(isAxiosError(error)) {
      return error.response?.data || error.message;

    }else{
        "An unexpected error occurred";
    }
}

export default axiosErrorHandler;