import { STHeading } from "@StorytellerComponents/atoms";
import { Box, Divider } from "@chakra-ui/react";
import { AboutUsHeadingProps } from "./props";

const AboutUsHeading: React.FC<AboutUsHeadingProps> = (props) => {
    const { text } = props;

    return (
        <Box w={["85%", "85%", "100%"]}>
            <STHeading color="#fff" textAlign={["center", "center", "left"]}>
                {text}
            </STHeading>
            <Box display={"flex"} flexDir="row" pt="1.5rem">
                <Divider border="2px solid #ffffff" w="33.33%" />
                <Divider
                    border="2px solid rgba(202, 184, 185, 0.23)"
                    w="66.67%"
                />
            </Box>
        </Box>
    );
};

export default AboutUsHeading;
