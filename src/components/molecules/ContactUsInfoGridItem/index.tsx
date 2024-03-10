import { STIconButton, STText } from "@StorytellerComponents/atoms";
import { Box, GridItem } from "@chakra-ui/react";
import { ContactUsInfoGridItemProps } from "./props";

const ContactUsInfoGridItem: React.FC<ContactUsInfoGridItemProps> = (props) => {
    const { key, iconAlt, iconSrc, url, ariaLabel, type, mediaHandle } = props;

    return (
        <GridItem
            key={key}
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
