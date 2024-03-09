import {
    BackgroundImageBox,
    STDivider2,
    STHeading,
    STText,
} from "@StorytellerComponents/atoms";
import { Box } from "@chakra-ui/react";

const ContactUsThumbnail: React.FC<any> = () => {
    return (
        <BackgroundImageBox
            backgroundImage={[
                "linear-gradient(90deg, rgba(68, 68, 68, 0.90) 100%, rgba(68, 68, 68, 0.90) 100%, rgba(68, 68, 68, 0.90) 100%, rgba(68, 68, 68, 0.90) 100%), url(/assets/images/thumbnail/thumbnail_image_1.jpg)",
                "linear-gradient(90deg, rgba(68, 68, 68, 0.90) 100%, rgba(68, 68, 68, 0.90) 100%, rgba(68, 68, 68, 0.90) 100%, rgba(68, 68, 68, 0.90) 100%), url(/assets/images/thumbnail/thumbnail_image_1.jpg)",
                "linear-gradient(90deg, rgba(68, 68, 68, 0.90) 100%, rgba(68, 68, 68, 0.90) 100%, rgba(68, 68, 68, 0.90) 100%, rgba(68, 68, 68, 0.90) 100%), url(/assets/images/thumbnail/thumbnail_image_1.jpg)",
                "linear-gradient(to left, rgba(68, 68, 68, 0.90) 0%, rgba(68, 68, 68, 0.81) 53.13%, rgba(68, 68, 68, 0.65) 83.33%, rgba(68, 68, 68, 0.40) 100%), url(/assets/images/thumbnail/thumbnail_image_1.jpg)",
            ]}
            h={["100%", "100%", "100%", "100vh"]}
            w={["100%", "100%", "100%", "50%"]}
            filter="none"
            overflow="hidden"
            position={["relative", "relative", "relative", "fixed", "fixed"]}
            top="0"
            left="0"
            mb={["100px"]}
        >
            <Box
                textAlign={["center", "center", "center", "left"]}
                p={["2.5rem", "5rem", "7.5rem", "5rem", "7.5rem"]}
                color="white"
                display="flex"
                flexDir="column"
                justifyContent={"center"}
                minH={["400px"]}
                w="100%"
                h="100%"
            >
                <STHeading>CONTACT US</STHeading>
                <STDivider2
                    boxProps={{ py: ["1.5rem", "1.5rem", "1.5rem", "3rem"] }}
                    rightLineProps={{
                        border: "2px solid rgba(255, 255, 255, 0.5)",
                    }}
                />
                <STText>
                    Please feel free to contact us through the form below or via
                    the channels to enquire or book an appointment with us.
                </STText>
            </Box>
        </BackgroundImageBox>
    );
};

export default ContactUsThumbnail;
