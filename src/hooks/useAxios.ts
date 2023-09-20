import { useState } from "react";
import axios, { AxiosRequestConfig } from "axios";

type callbackFnType = (err: any | null, res: any | null) => {}

// Axios Hook
const useAxios = (axiosConfig: AxiosRequestConfig, callbackFn: callbackFnType) => {
  // Loading state when fetching data
  const [loading, setLoading] = useState<boolean>(false);

  // Base URL (If exists)
  axios.defaults.baseURL = process.env.API_URL ? process.env.API_URL : axios.defaults.baseURL;

  // Fetch function to call axios fetch whenever you need it
  const axiosFetch = (data?: object) => {
    setLoading(true);
    axios.request({
      data: data ? data : null,
      ...axiosConfig,
    })
    .then((res) => {
      // All 2XX status is success, everything else is fail
      if(res.status >= 200 && res.status < 300) {
        callbackFn(null, res);
      } else {
        callbackFn(res, null);
      }
    })
    .catch((err) => {
      callbackFn(err, null);
    })
    .finally(() => {
      setLoading(false);
    })
  } 

  return {loading, axiosFetch}
}

export default useAxios;