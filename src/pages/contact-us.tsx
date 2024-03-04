import {
    ContactUsForm,
    ContactUsInfoGrid,
    ContactUsThumbnail,
} from "@StorytellerComponents/organisms";
import { Box, Divider, HStack } from "@chakra-ui/react";

export default function ContactUs() {
    return (
        <Box>
            <ContactUsThumbnail />
            <Box
                w={["100%", "100%", "100%", "50%"]}
                p={["1rem", "2.5rem", "5rem", "2.5rem", "5rem"]}
                ml={["0%", "0%", "0%", "50%"]}
                overflow={"auto"}
                gap="2.5rem"
                display="flex"
                flexDir="column"
            >
                <ContactUsInfoGrid />
                <HStack
                    w="100%"
                    justifyContent="center"
                    alignItems="center"
                    gap={["0rem", "1rem", "2rem"]}
                    display={["none", "none", "flex", "none", "flex"]}
                >
                    <Divider
                        border="1px solid #000"
                        w={["85vw", "30vw"]}
                        opacity={"1"}
                    />
                    <Box
                        minW="10px"
                        minH="10px"
                        transform="rotate(45deg)"
                        background={"black"}
                        display={["none", "initial"]}
                    ></Box>
                    <Divider
                        border="1px solid #000"
                        w="30vw"
                        opacity={"1"}
                        display={["none", "initial"]}
                    />
                </HStack>
                <ContactUsForm />
            </Box>
        </Box>
    );
}
