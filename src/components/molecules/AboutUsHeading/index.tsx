import { STHeading } from "@StorytellerComponents/atoms";
import { AboutUsHeadingProps } from "./props";

import { Box, Divider } from "@chakra-ui/react";

/**
 * This component renders out the Heading text at the top
 * as well as the line below the heading as well.
 *
 * @param {AboutUsHeadingProps} props The properties of the component. Most important is "text" props that represents the text in the Heading
 * @returns {React.ReactNode} The Heading text in the About Us section
 */
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
