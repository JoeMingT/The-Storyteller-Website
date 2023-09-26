import { STHeading, STText } from "@StorytellerComponents/atoms";
import { Box } from "@chakra-ui/react";

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
