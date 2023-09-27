import { STButton, STText } from "@StorytellerComponents/atoms";
import { GridItem } from "@chakra-ui/react";
import NextLink from "next/link";
import { AboutUsHeading, AboutUsText } from "..";

/**
 * The component that renders the details of the About Us section.
 * In other words, it's the first element in the About Us page
 *
 * @returns {React.ReactNode} The component containing all details of About Us section
 */
const AboutUsDetails: React.FC<any> = () => {
    return (
        <GridItem
            display="flex"
            alignItems={["center", "center", "flex-start"]}
            gap={["2rem", "3rem"]}
            flexDir="column"
            px={["2.5rem", "0rem"]}
        >
            <AboutUsHeading text="About Us!" />
            <AboutUsText />
            <NextLink href="/about">
                <STButton
                    _hover={{ backgroundColor: "secondary", color: "primary" }}
                    p={["1rem", "1rem", "1.5rem", "2rem"]}
                    w={["100%", "100%", "initial"]}
                >
                    <STText>Read More!</STText>
                </STButton>
            </NextLink>
        </GridItem>
    );
};

export default AboutUsDetails;
