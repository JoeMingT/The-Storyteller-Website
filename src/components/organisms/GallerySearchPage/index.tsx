import {
    DisplayGalleries,
    STHeading,
    SearchBar,
} from "@StorytellerComponents/atoms";
import { Box, VStack } from "@chakra-ui/react";
import { GallerySearchPageProps } from "./props";

/**
 * The component to render out the search results. Mainly to tell the users what they have searched, and what
 * corresponding results has been obtained from the search query.
 *
 * @param {SearchBarProps} props The properties for the component. Mainly properties for styling purposes.
 * @returns {React.ReactNode} The search bar component.
 */
const GallerySearchPage: React.FC<GallerySearchPageProps> = (props) => {
    const { queryParams, noOfPages, initialData, itemsPerPage, initialPage } =
        props;
    return (
        <>
            <VStack
                background="secondary"
                w="100%"
                p="5rem"
                gap="2.5rem"
                textAlign="center"
            >
                <SearchBar
                    type="secondary"
                    hStackProps={{
                        maxW: "100%",
                        w: "100%",
                        py: ["0.5rem"],
                    }}
                    inputFieldProps={{
                        minW: ["50vw"],
                    }}
                />
                <STHeading
                    fontSize={["lg", "xl", "2xl", "3xl", "4xl"]}
                    noOfLines={4}
                    textOverflow={`ellipsis`}
                >
                    Showing Search Results for:
                    <br />
                    {`${queryParams.searchQuery}`}
                </STHeading>
            </VStack>
            <Box
                h="100%"
                background="primary"
                px={["0rem", "2.5rem", "5rem"]}
                py={["2.5rem", "5rem"]}
                display="flex"
                flexDir="column"
                gap={["3rem", "3rem", "5rem"]}
            >
                <DisplayGalleries
                    noOfPages={noOfPages}
                    initialData={initialData}
                    itemsPerPage={itemsPerPage}
                    initialPage={initialPage}
                />
            </Box>
        </>
    );
};

export default GallerySearchPage;
