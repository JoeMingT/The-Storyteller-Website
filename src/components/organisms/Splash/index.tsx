import StorytellerLogo from "@/public/assets/logo/storyteller_logo_rectangle.png";
import { RedirectButton, STImage, STText } from "@StorytellerComponents/atoms";
import { SplashBackground, SplashText } from "@StorytellerComponents/molecules";

import { VStack } from "@chakra-ui/react";

/**
 * The Splash component that is rendered at Landing Page.
 *
 * @returns {React.ReactNode} The Splash Component for the website
 */
const Splash: React.FC<any> = () => {
    return (
        <>
            <SplashBackground />
            <VStack
                w={["100%", "100%", "50%"]}
                h="100vh"
                minH={["450px", "600px"]}
                maxH={["500px", "650px"]}
                gap={["2rem", "3rem", "4rem"]}
                alignItems={["center", "flex-start"]}
                justifyContent={"center"}
                py={["3rem"]}
                px={["1rem", "0rem"]}
                pl={["1rem", "5rem", "7.5rem", "10rem"]}
            >
                <STImage
                    src={StorytellerLogo}
                    alt="Storyteller Logo"
                    width={["150px", "200px", "325px"]}
                    height=""
                />
                <SplashText />
                <RedirectButton href="/contact-us">
                    <STText>Contact Us!</STText>
                </RedirectButton>
            </VStack>
        </>
    );
};

export default Splash;
