import { STButton, STText } from "@StorytellerComponents/atoms";
import { AboutUsHeading, AboutUsText } from "@StorytellerComponents/molecules";

import { GridItem } from "@chakra-ui/react";
import NextLink from "next/link";
import { AboutUsDetailsProps } from "./props";

/**
 * The component that renders the details of the About Us section.
 * In other words, it's the first element in the About Us page
 *
 * @param {AboutUsDetailsProps} props The properties for the component. Mainly the data / information to be shown in the component.
 * @returns {React.ReactNode} The component containing all details of About Us section
 */
const AboutUsDetails: React.FC<AboutUsDetailsProps> = (props: AboutUsDetailsProps): React.ReactNode => {
    const { aboutUsPreviewText } = props;
    return (
        <GridItem
            display="flex"
            alignItems={["center", "center", "flex-start"]}
            gap={["2rem", "3rem"]}
            flexDir="column"
            px={["2.5rem", "0rem"]}
        >
            <AboutUsHeading text="ABOUT US" />
            <AboutUsText aboutUsPreviewText={aboutUsPreviewText} />
            <NextLink href="/about">
                <STButton
                    _hover={{ backgroundColor: "secondary", color: "primary" }}
                    w={["100%", "100%", "initial"]}
                >
                    <STText>Read More!</STText>
                </STButton>
            </NextLink>
        </GridItem>
    );
};

export default AboutUsDetails;
