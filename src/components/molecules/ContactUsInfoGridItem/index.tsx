import { STIconButton, STText } from "@StorytellerComponents/atoms";
import { Box, GridItem } from "@chakra-ui/react";
import { ContactUsInfoGridItemProps } from "./props";

/**
 * The boxes inside the Info Grid. It shows the logo, the social media type, the media handle and so on.
 * Allows users to click on it to redirect them to the selected social media page.
 *
 * @param {ContactUsInfoGridItemProps} props The data needed to show each social media
 * @returns {React.ReactNode} The Component containing the Contact Us Info Grid of the studio's social media
 */
const ContactUsInfoGridItem: React.FC<ContactUsInfoGridItemProps> = (props: ContactUsInfoGridItemProps): React.ReactNode => {
    const { iconAlt, iconSrc, url, ariaLabel, type, mediaHandle } = props;

    return (
        <GridItem
            backgroundColor="secondary"
            p="2rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius={"25px"}
        >
            <Box
                display="flex"
                flexDir="column"
                h="100%"
                w="100%"
                p="1rem"
                cursor="pointer"
                borderRadius={"25px"}
                onClick={() => {
                    window.open(`${url}`, "_blank");
                }}
                textAlign="center"
                _hover={{
                    backgroundColor: "#E5DFD7",
                }}
            >
                <STIconButton
                    iconAlt={iconAlt}
                    iconSrc={iconSrc}
                    iconWidth={["30px", "30px", "30px", "40px", "50px"]}
                    pb="1rem"
                    aria-label={ariaLabel}
                    disabled
                />
                <STText fontSize={["sm", "sm", "md", "lg", "lg"]} color="black">
                    {type}
                </STText>
                <STText
                    fontSize={["xs", "xs", "sm", "sm", "sm"]}
                    color="darkAccent"
                >
                    {mediaHandle}
                </STText>
            </Box>
        </GridItem>
    );
};

export default ContactUsInfoGridItem;
