import { STDivider1 } from "@StorytellerComponents/atoms";
import {
    ContactUsForm,
    ContactUsInfoGrid,
    ContactUsThumbnail,
} from "@StorytellerComponents/organisms";
import { Box } from "@chakra-ui/react";

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
                <STDivider1
                    hStackProps={{
                        display: ["none", "none", "flex", "none", "flex"],
                    }}
                    leftLineProps={{
                        borderColor: "black",
                        display: "initial",
                    }}
                    rightLineProps={{
                        borderColor: "black",
                        display: "initial",
                    }}
                    centerDiamondProps={{
                        backgroundColor: "black",
                        display: "initial",
                    }}
                />
                <ContactUsForm />
            </Box>
        </Box>
    );
}
