import {
    STComponentWrapper,
    STHeading,
    STText,
} from "@StorytellerComponents/atoms";
import { SelectedGalleryTitleProps } from "./props";

import { Box, Center, Divider } from "@chakra-ui/react";

/**
 * The component that renders the title at the top of the component. The component includes details such as the
 * clients who commissioned for the session, the photographers for the session, the venue, and the title of the gallery.
 *
 * @param {SelectedGalleryTitleProps} props The props containing the information required for the title section.
 * @returns {React.ReactNode} The rendered Selected Gallery title / top part
 */
const SelectedGalleryTitle: React.FC<SelectedGalleryTitleProps> = (props: SelectedGalleryTitleProps): React.ReactNode => {
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
                boxShadow={"0px 0px 15px 5px rgb(0,0,0,0.2)"}
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
