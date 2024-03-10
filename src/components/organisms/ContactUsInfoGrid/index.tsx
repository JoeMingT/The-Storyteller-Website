import { Box, Grid, VStack } from "@chakra-ui/react";
import { socialMediaLinks } from "@Storyteller/data/socialMediaLinks";
import { STHeading, STText } from "@StorytellerComponents/atoms";
import { ContactUsInfoGridItem } from "@StorytellerComponents/molecules";

const ContactUsInfoGrid: React.FC<any> = () => {
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
