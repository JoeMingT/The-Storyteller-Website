import { STHeading, STText } from "@StorytellerComponents/atoms";

import { Box } from "@chakra-ui/react";

/**
 * The component that is responsible for rendering the text in the Our Company section.
 * Basically the writeup section talking about the company.
 *
 * @returns {React.ReactNode} The rendered Writeup for the About Page
 */
const OurCompanyWriteup: React.FC<any> = (props) => {
    return (
        <Box
            textAlign="center"
            color="white"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDir="column"
        >
            <STHeading textDecoration="underline" py={["2rem", "2rem", "3rem"]}>
                About The Storyteller
            </STHeading>
            <STText width="80%">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
            </STText>
        </Box>
    );
};

export default OurCompanyWriteup;
