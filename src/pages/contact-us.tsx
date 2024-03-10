import { STDivider1 } from "@StorytellerComponents/atoms";
import {
    ContactUsForm,
    ContactUsInfoGrid,
    ContactUsThumbnail,
} from "@StorytellerComponents/organisms";
import { Box } from "@chakra-ui/react";

/**
 * Route: "/contact-us"
 *
 * Components Related: "ContactUsThumbnail", "ContactUsInfoGrid", "ContactUsForm"
 *
 * This is the Contact Us Page. This is the page where the user will navigate to in order to get in contact with the team.
 * Allow the user to send email or redirected to the selected social media site.
 */
export default function ContactUs() {
    return (
        <Box>
            <ContactUsThumbnail />
            <Box
                w={["100%", "100%", "100%", "50%"]}
                p={["1rem", "2.5rem", "5rem", "2.5rem", "5rem"]}
                // Margin Left 50% as the thumbnail is fixed to the right for 50% of the width
                // 0% when the thumbnail is not fixed anymore
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
