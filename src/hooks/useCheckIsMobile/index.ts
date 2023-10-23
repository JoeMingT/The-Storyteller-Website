import { useState } from "react";

const useCheckIsMobile = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    const checkIsMobile = () => {
        /* Storing user's device details in a variable*/
        let details = navigator.userAgent;

        /* Creating a regular expression 
        containing some mobile devices keywords 
        to search it in details string*/
        let regexp = /android|iphone|kindle|ipad/i;

        /* Using test() method to search regexp in details
        it returns boolean value*/
        let isMobileDevice = regexp.test(details);

        setIsMobile(isMobileDevice);
    };

    return { isMobile, checkIsMobile };
};

export default useCheckIsMobile;
