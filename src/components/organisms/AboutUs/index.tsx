import { STComponentWrapper } from "@StorytellerComponents/atoms";
import { AboutUsImage, AboutUsDetails } from "@StorytellerComponents/molecules";
import { Grid } from "@chakra-ui/react";

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
