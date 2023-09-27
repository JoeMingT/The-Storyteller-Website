import { STHeading, STText } from "@StorytellerComponents/atoms";
import { Box } from "@chakra-ui/react";

/**
 * Component to render the Text and heading of the splash
 * All the text section is located here
 *
 * @returns {React.ReactNode} The rendered text in the Splash component
 */
const SplashText: React.FC<any> = () => {
    return (
        <Box textAlign={["center", "initial"]}>
            <STHeading>&quot;Storyteller&quot;</STHeading>
            <STText>A Person who writes, tells, or reads stories.</STText>
            <STText>Me? I do it by taking pictures</STText>
        </Box>
    );
};

export default SplashText;
