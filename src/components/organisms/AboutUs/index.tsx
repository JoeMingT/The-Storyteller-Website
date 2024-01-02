import { STComponentWrapper } from "@StorytellerComponents/atoms";
import { AboutUsDetails, AboutUsImage } from "@StorytellerComponents/molecules";

import { Grid } from "@chakra-ui/react";
import { AboutUsProps } from "./props";

/**
 * The About Us component. Not to be confused with the About Us **PAGE**.
 * This component is the brief explanation about The Storyteller as a whole.
 *
 * For the component in the About Us PAGE, check Our Company and Our Team component.
 *
 * @returns {React.ReactNode} The About Us component
 */
const AboutUs: React.FC<AboutUsProps> = (props) => {
    const { aboutUsPreviewText } = props;
    return (
        <STComponentWrapper>
            <Grid
                background="primary"
                h="100%"
                templateColumns={[
                    "repeat(1, 1fr)",
                    "repeat(1, 1fr)",
                    "repeat(2, 1fr)",
                ]}
                px={["0rem", "2.5rem", "3.75rem", "5rem"]}
                py={["3rem", "3rem", "5rem"]}
                mx={["0rem", "2.5rem", "3.75rem", "5rem"]}
                my={["1.5rem", "1.5rem", "2.5rem"]}
                gap={["3rem", "3rem", "5rem"]}
                borderRadius={"25px"}
                boxShadow={"10px 10px 5px 0 rgb(0,0,0,0.2)"}
            >
                <AboutUsDetails aboutUsPreviewText={aboutUsPreviewText} />
                <AboutUsImage />
            </Grid>
        </STComponentWrapper>
    );
};

export default AboutUs;
