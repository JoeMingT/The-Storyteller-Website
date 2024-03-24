import { STHeading, STText } from "@StorytellerComponents/atoms";

import { defaultAboutUsData } from "@Storyteller/data/defaultAboutUsData";
import { Box } from "@chakra-ui/react";
import { OurCompanyWriteupProps } from "./props";

/**
 * The component that is responsible for rendering the text in the Our Company section.
 * Basically the writeup section talking about the company.
 *
 * @returns {React.ReactNode} The rendered Writeup for the About Page
 */
const OurCompanyWriteup: React.FC<OurCompanyWriteupProps> = (props) => {
    const { aboutUsFullText } = props;
    return (
        <Box
            textAlign="center"
            color="white"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDir="column"
        >
            <STHeading py={["2rem", "2rem", "3rem"]}>
                About The Storyteller
            </STHeading>
            <STText width="80%">
                {aboutUsFullText
                    ? aboutUsFullText
                    : defaultAboutUsData.full.body}
            </STText>
        </Box>
    );
};

export default OurCompanyWriteup;
