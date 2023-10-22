import axios, { AxiosRequestConfig } from "axios";
import { useState } from "react";

type callbackFnType = (res: any | null, err: any | null) => any;
type useAxiosType = {
    isLoading: boolean;
    axiosFetchData: (
        bodyData?: object,
        extraParams?: AxiosRequestConfig
    ) => void;
};

/**
 * A hook to initalize and prepare axios to fetch data. Used client side to fetch data dynamically.
 * The axiosParams passed into the function will be destructured when fetching data.
 * callbackFn is a callback function that will be called when the axios is finished fetching (both success or failed fetch)
 *
 * This hook will return a "isLoading" state which will indicate whether the fetching process has completed or not
 * It will also return a function, which can be called anytime to fetch new data.
 *
 * @param {AxiosRequestConfig} axiosParams The default parameters / properties initialized for this axios instance
 * @param {callbackFnType} callbackFn The callback function that will run when the fetching process has completed. Return either a response or an error
 * @returns {useAxiosType} The loading indicator and the function to fetch data
 */
const useAxios = (
    axiosParams: AxiosRequestConfig,
    callbackFn: callbackFnType
): useAxiosType => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    /**
     * Function that uses axios to fetch data.
     * Nothing special, standard fetching procedures. Make a request, if the request return the
     * correct status code, it will be a success, otherwise it will be considered an error. If request
     * failed halfway through, it will be considered an error as well.
     *
     * @param {object} bodyData The request body data that will be sent. Normally used for POST request and request that require body data.
     * @param {AxiosRequestConfig} extraParams The extra / overriding old parameters for the fetch request
     * @returns {void} None, directly pass the response to the callback function
     */
    const axiosFetchData = (
        bodyData?: object,
        extraParams?: AxiosRequestConfig
    ) => {
        setIsLoading(true);
        axios
            .request({
                ...axiosParams,
                ...extraParams,
                data: bodyData ? bodyData : null,
            })
            .then((res) => {
                if (res.status >= 200 && res.status < 400) {
                    callbackFn(res, { error: "None" });
                } else {
                    callbackFn({ error: "Returned Bad Status Code" }, res);
                }
            })
            .catch((err) => {
                callbackFn({ error: "Fetching Failed" }, err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return { isLoading, axiosFetchData };
};

export default useAxios;
