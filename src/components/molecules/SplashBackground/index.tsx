import { BackgroundImageBox } from "@StorytellerComponents/atoms";
import { useEffect, useState } from "react";

/**
 * Component to render the Splash image background
 * as well as the white linear gradient for the splash
 *
 * @returns {React.ReactNode} The background image and linear gradient for the splash component
 */
const SplashBackground: React.FC<any> = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
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
    }, []);

    return (
        <BackgroundImageBox
            backgroundImage={[
                "linear-gradient(90deg, rgba(255, 255, 255, 0.80) 100%, rgba(255, 255, 255, 0.80) 100%, rgba(255, 255, 255, 0.80) 100%, rgba(255, 255, 255, 0.80) 100%), url(/assets/images/thumbnail/thumbnail_image_1.jpg)",
                "linear-gradient(90deg, rgba(255, 255, 255, 0.90) 0%, rgba(255, 255, 255, 0.81) 53.13%, rgba(255, 255, 255, 0.55) 83.33%, rgba(255, 255, 255, 0.05) 100%), url(/assets/images/thumbnail/thumbnail_image_1.jpg)",
            ]}
            backgroundAttachment={isMobile ? "initial" : "fixed"}
            h="100vh"
            maxH={["500px", "650px"]}
            minH={["450px", "600px"]}
        />
    );
};

export default SplashBackground;
