import { ThumbnailGalleryType } from "@Storyteller/types";
import { STHeading, STIconButton } from "@StorytellerComponents/atoms";
import { AllGalleriesCard } from "@StorytellerComponents/molecules";
import {
    getAllGalleriesThumbnail,
    getQueriedGalleriesThumbnail,
} from "@StorytellerSanity/queries";

import {
    Box,
    Center,
    Grid,
    GridItem,
    Spinner,
    useBreakpointValue,
    useToast,
} from "@chakra-ui/react";
import ReactPagination from "react-paginate";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DisplayGalleriesProps } from "./props";

/**
 * The component rendering the thumbnails for all galleries that is passed into this component.
 * Data passed includes the Title / Name, a URL for the thumbnail image and the slug
 *
 *
 * @param {DisplayGalleriesProps} props The properties for the component. All of it is mainly used for the first load of the component. Subsequent loads are fetched from backend database.
 * @returns {React.ReactNode} The rendered content of the component with pagination.
 */
const DisplayGalleries: React.FC<DisplayGalleriesProps> = (props) => {
    const { noOfPages, initialData, itemsPerPage, initialPage } = props;

    const toast = useToast();
    const router = useRouter();

    const [galleryData, setGalleryData] =
        useState<ThumbnailGalleryType[]>(initialData);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [currPage, setCurrPage] = useState<number>(initialPage);

    // To have responsive Page Range and Margin Pages for React Paginate
    const pageRangeDisplayed = useBreakpointValue({ base: 1, sm: 2 });
    const marginPagesDisplayed = useBreakpointValue({ base: 1, sm: 2, md: 3 });

    // Default Props for the pagination buttons
    const buttonProps = {
        borderRadius: "100%",
        border: "2px solid #EFEDE7",
        iconWidth: ["15px", "20px", "30px"],
        iconHeight: "100%",
        p: "10px",
        _hover: {
            backgroundColor: "#7E7F7A",
            border: "2px solid transparent",
        },
    };

    // useEffect triggers on page load
    // Whenever the query params for "searchQuery" gets updated (meaning when the user makes another search)
    // Trigger useEffect code inside, which triggers the setState function, which allows for re-rendering of the grid component.
    useEffect(() => {
        setGalleryData(initialData);
    }, [router.query.searchQuery]);

    // Function to return the component according to whether it is currently fetching data or not
    const renderMainContent = () => {
        return isLoading ? (
            /* If it is loading */
            <Center h="100vh">
                <Spinner
                    color="secondary"
                    width={["100px", "200px"]}
                    height={["100px", "200px"]}
                    emptyColor="darkAccent"
                    thickness="10px"
                    margin={["1.5rem", "3rem"]}
                />
            </Center>
        ) : /* If there is any data in the galleryData field */
        galleryData.length !== 0 ? (
            /* Return the fetched data in a Grid-Card format if got data */
            <Grid
                templateColumns={[
                    "repeat(1, 1fr)",
                    "repeat(1, 1fr)",
                    "repeat(2, 1fr)",
                    "repeat(3, 1fr)",
                ]}
                gap={["1.5rem", "2.5rem", "2.5rem"]}
                minH="100vh"
            >
                {galleryData.map((gallery) => {
                    return (
                        <GridItem key={`${gallery._id}`}>
                            <AllGalleriesCard
                                imgUrl={gallery.thumbnail}
                                galleryTitle={gallery.name}
                                galleryUrl={gallery.slug}
                            />
                        </GridItem>
                    );
                })}
            </Grid>
        ) : (
            /* If not, return the fetched data in a Grid-Card format */
            <Box
                h="100vh"
                justifyContent={"center"}
                alignItems={"center"}
                textAlign={"center"}
                display="flex"
            >
                <STHeading color="white">There are no Gallery Found!</STHeading>
            </Box>
        );
    };

    return (
        <>
            {renderMainContent()}
            <ReactPagination
                // How many pages total
                pageCount={noOfPages}
                // The range to display around the current active page
                //       This Part
                // 1 2 ... 5 6 7 ... 19 20
                pageRangeDisplayed={pageRangeDisplayed}
                // The amount of pages to display at the end of the pagination
                // This               Part
                // 1 2 ... 5 6 7 ... 19 20
                marginPagesDisplayed={marginPagesDisplayed}
                // Force current active page. Used this instead of Initial page
                // due to the fact it fetches data dynamically (when page change occurs)
                // and not all data is fetched in one single go
                forcePage={currPage}
                // Custom Class Names for styling
                containerClassName="pagination"
                breakClassName="pagination-break"
                breakLinkClassName="pagination-break-link"
                pageClassName="pagination-page"
                pageLinkClassName="pagination-page-link"
                activeClassName="pagination-active"
                activeLinkClassName="pagination-active-link"
                previousClassName="pagination-previous"
                nextClassName="pagination-next"
                previousLinkClassName="pagination-previous-link"
                nextLinkClassName="pagination-next-link"
                disabledClassName="pagination-disabled"
                disabledLinkClassName="pagination-disabled-link"
                // Buttons for Next and Previous page
                previousLabel={
                    <STIconButton
                        iconSrc="/assets/icon/left-nav-arrow-white.svg"
                        iconAlt="Pagination Arrow Left"
                        {...buttonProps}
                    />
                }
                nextLabel={
                    <STIconButton
                        iconSrc="/assets/icon/right-nav-arrow-white.svg"
                        iconAlt="Pagination Arrow Right"
                        {...buttonProps}
                    />
                }
                onClick={(event) => {
                    // When we click on the pagination, check for these conditions
                    // IF these conditions occurs, don't transition the page
                    // (as transition will trigger onPageChange, causing it to fetch data again)
                    if (
                        event.isActive ||
                        (event.isNext && event.selected === noOfPages - 1) ||
                        (event.isPrevious && event.selected === 0) ||
                        isLoading
                    ) {
                        return false;
                    }
                }}
                onPageChange={async (page) => {
                    // When the page is successfully changed:
                    // Scroll to the top
                    window.scroll({
                        top: 0,
                        behavior: "smooth",
                    });
                    // Se loading is true, so it will render a loading indicator
                    setIsLoading(true);

                    // Get the data from backend
                    (router.query.searchQuery
                        ? getQueriedGalleriesThumbnail(
                              itemsPerPage,
                              page.selected,
                              router.query.searchQuery.toString().split(" ")
                          )
                        : getAllGalleriesThumbnail(itemsPerPage, page.selected)
                    )
                        .then((data) => {
                            // If success update the data accordingly
                            setGalleryData(data);
                            setCurrPage(page.selected);
                            // Update the href to include a query parameter (for users who want to access it in the future)
                            router.push(
                                {
                                    query: {
                                        // We destructure the query params
                                        // Mainly to retain the "searchQuery" param
                                        ...router.query,
                                        // Overwrite the page query params
                                        page: `${page.selected + 1}`,
                                    },
                                },
                                undefined,
                                { shallow: true }
                            );
                        })
                        .catch((err) => {
                            // Else present an error, and revert to original / initial data
                            toast({
                                title: "Error!",
                                description: `Failed to retrieve data for page ${page.selected}! Error Message: ${err}`,
                                status: "error",
                                duration: 5000,
                                isClosable: true,
                            });
                            setCurrPage(currPage);
                        })
                        .finally(() => {
                            // Then say loading is completed, so it will display the content body again
                            setIsLoading(false);
                        });
                }}
            />
        </>
    );
};

export default DisplayGalleries;
