import {
    BackgroundImageBox,
    RedirectButton,
    STDivider1,
    STHeading,
    STText,
} from "@StorytellerComponents/atoms";
import { GalleryPreviewItemProps } from "./props";

import { Box } from "@chakra-ui/react";

/**
 * The component that renders out each preview of a gallery.
 * It contains a thumbnail image (as the background), the title of the gallery and a button to redirect them to the gallery.
 *
 * @returns {React.ReactNode} One gallery preview
 */
const GalleryPreviewItem: React.FC<GalleryPreviewItemProps> = (props) => {
    const { imgUrl, galleryTitle, galleryUrl } = props;
    return (
        <Box h="100%" display="flex" alignItems="center">
            {/* The Background image for the gallery showcase */}
            <BackgroundImageBox
                backgroundImage={`linear-gradient(90deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.75) 100%), url(${imgUrl})`}
                h="100%"
                minH={["450px", "1000px"]}
                maxH={["1000px", "2000px"]}
            />
            <Box
                w="100%"
                display="flex"
                alignItems="center"
                flexDir="column"
                gap={["3rem", "3rem", "5rem"]}
                py={["7.5rem", "12.5rem"]}
                h="auto"
            >
                {/* Heading Text for Title */}
                <STHeading
                    w={["80%", "50%"]}
                    textAlign="center"
                    noOfLines={3}
                    color="#fff"
                >
                    {galleryTitle}
                </STHeading>
                {/* The seperator line */}
                <STDivider1 />
                {/* Redirect Button */}
                <RedirectButton
                    backgroundColor="transparent"
                    border="3px solid #97CDFF"
                    color="highlight"
                    _hover={{ backgroundColor: "highlight", color: "white" }}
                    href={`/gallery/${galleryUrl}`}
                >
                    <STText>View Here</STText>
                </RedirectButton>
            </Box>
        </Box>
    );
};

export default GalleryPreviewItem;
