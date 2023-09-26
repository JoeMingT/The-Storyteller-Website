import { Box } from "@chakra-ui/react";

/**
 * Component to render the Splash image background
 * as well as the white linear gradient for the splash
 * @returns {React.ReactNode} The Rendered Component
 */
const SplashBackground: React.FC<any> = () => {
    return (
        <Box
            w="100%"
            h="100vh"
            maxH={["500px", "650px"]}
            overflow="hidden"
            backgroundImage={[
                "linear-gradient(90deg, rgba(255, 255, 255, 0.80) 100%, rgba(255, 255, 255, 0.80) 100%, rgba(255, 255, 255, 0.80) 100%, rgba(255, 255, 255, 0.80) 100%), url(/assets/images/thumbnail/thumbnail_image_1.jpg)",
                "linear-gradient(90deg, rgba(255, 255, 255, 0.90) 0%, rgba(255, 255, 255, 0.81) 53.13%, rgba(255, 255, 255, 0.55) 83.33%, rgba(255, 255, 255, 0.05) 100%), url(/assets/images/thumbnail/thumbnail_image_1.jpg)",
            ]}
            backgroundPosition={"center"}
            backgroundRepeat={"no-repeat"}
            backgroundAttachment={"fixed"}
            filter={"blur(2px)"}
            flexDir="column"
            zIndex="-1"
            position="absolute"
        ></Box>
    );
};

export default SplashBackground;
