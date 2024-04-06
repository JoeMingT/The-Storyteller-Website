import { Box, Grid, VStack } from "@chakra-ui/react";
import { socialMediaLinks } from "@Storyteller/data/socialMediaLinks";
import { STHeading, STText } from "@StorytellerComponents/atoms";
import { ContactUsInfoGridItem } from "@StorytellerComponents/molecules";

/**
 * The Info Grid in the Contact Us Page, consisting of all the social media links and
 * platforms that the user can use to reach out to the team. Allow them to be redirected
 * to the selected social media site.
 *
 * @returns {React.ReactNode} The Component containing the Contact Us Info Grid of the studio's social media
 */
const ContactUsInfoGrid: React.FC<any> = (): React.ReactNode => {
    return (
        <VStack gap={["1rem", "1.5rem", "2.5rem"]}>
            <Box color="black" textAlign="center">
                <STHeading>Our Socials!</STHeading>
                <STText color="darkAccent">Follow us and more!</STText>
            </Box>
            <Grid
                templateColumns={[
                    "repeat(1, 75%)",
                    "repeat(2, 45%)",
                    "repeat(2, 45%)",
                    "repeat(1, 75%)",
                    "repeat(2, 45%)",
                ]}
                gap="2rem"
                w="100%"
                justifyContent={"center"}
            >
                {socialMediaLinks.map((link) => {
                    return (
                        <ContactUsInfoGridItem
                            key={link.iconSrc}
                            iconAlt={link.iconAlt}
                            iconSrc={link.iconSrc}
                            url={link.url}
                            ariaLabel={link.ariaLabel}
                            type={link.type}
                            mediaHandle={link.mediaHandle}
                        />
                    );
                })}
            </Grid>
        </VStack>
    );
};

export default ContactUsInfoGrid;
