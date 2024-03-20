import { STDivider2, STHeading } from "@StorytellerComponents/atoms";
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
            <STDivider2 />
        </Box>
    );
};

export default AboutUsHeading;
