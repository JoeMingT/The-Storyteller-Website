import { Box, Grid, GridItem, VStack } from "@chakra-ui/react";
import { socialMediaLinks } from "@Storyteller/data/socialMediaLinks";
import { STHeading, STIconButton, STText } from "@StorytellerComponents/atoms";

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
                {socialMediaLinks.map((link, index) => {
                    return (
                        <GridItem
                            key={link.iconAlt}
                            backgroundColor="secondary"
                            p="2rem"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Box
                                display="flex"
                                flexDir="column"
                                h="100%"
                                w="100%"
                                p="1rem"
                                cursor="pointer"
                                onClick={() => {
                                    window.open(`${link.url}`, "_blank");
                                }}
                                textAlign="center"
                                _hover={{
                                    backgroundColor: "#E5DFD7",
                                }}
                            >
                                <STIconButton
                                    iconAlt={link.iconAlt}
                                    iconSrc={link.iconSrc}
                                    iconWidth={[
                                        "30px",
                                        "30px",
                                        "30px",
                                        "40px",
                                        "50px",
                                    ]}
                                    pb="1rem"
                                    disabled
                                />
                                <STText
                                    fontSize={["sm", "sm", "md", "lg", "lg"]}
                                    color="black"
                                >
                                    {link.type}
                                </STText>
                                <STText
                                    fontSize={["xs", "xs", "sm", "sm", "sm"]}
                                    color="darkAccent"
                                >
                                    {link.mediaHandle}
                                </STText>
                            </Box>
                        </GridItem>
                    );
                })}
            </Grid>
        </VStack>
    );
};

export default ContactUsInfoGrid;
