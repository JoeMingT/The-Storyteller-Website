import {
    STComponentWrapper,
    STHeading,
    STText,
} from "@StorytellerComponents/atoms";
import { Box, Center, Divider } from "@chakra-ui/react";
import { SelectedGalleryTitleProps } from "./props";

const SelectedGalleryTitle: React.FC<SelectedGalleryTitleProps> = (props) => {
    const { galleryName, clients, photographers, venue } = props;

    const mergeNames = (arrOfNames: string[]) => {
        const mergedNames = arrOfNames ? arrOfNames.join(" & ") : "";
        return mergedNames;
    };

    return (
        <STComponentWrapper>
            <Center
                flexDir="column"
                gap="2rem"
                textAlign="center"
                backgroundColor="primary"
                py="5rem"
                color="secondary"
            >
                <STHeading w="80%">{galleryName}</STHeading>
                <STText w={["80%", "65%", "50%"]}>{mergeNames(clients)}</STText>
                <Divider
                    border="3px solid secondary"
                    w={["80%", "65%", "50%"]}
                />
                <Box
                    w={["80%", "65%", "50%"]}
                    display="flex"
                    flexDir="column"
                    gap={["1rem", "0rem"]}
                >
                    <STText>
                        <strong>Photographers</strong> &#8212;{" "}
                        {mergeNames(photographers)}
                    </STText>
                    <STText>
                        <strong>Venue</strong> &#8212; {venue}
                    </STText>
                </Box>
                <Divider
                    border="3px solid secondary"
                    w={["80%", "65%", "50%"]}
                />
            </Center>
        </STComponentWrapper>
    );
};

export default SelectedGalleryTitle;
