import { STComponentWrapper } from "@StorytellerComponents/atoms";
import { AboutUsDetails, AboutUsImage } from "@StorytellerComponents/molecules";
import { Grid } from "@chakra-ui/react";

/**
 * The About Us component. Not to be confused with the About Us **PAGE**.
 * This component is the brief explanation about The Storyteller as a whole.
 *
 * For the component in the About Us PAGE, check Our Company and Our Team component.
 *
 * @returns The About Us component
 */
const AboutUs: React.FC<any> = () => {
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
                px={["0rem", "5rem", "7.5rem", "10rem"]}
                py={["3rem", "3rem", "5rem"]}
                gap={["3rem", "3rem", "5rem"]}
            >
                <AboutUsDetails />
                <AboutUsImage />
            </Grid>
        </STComponentWrapper>
    );
};

export default AboutUs;
