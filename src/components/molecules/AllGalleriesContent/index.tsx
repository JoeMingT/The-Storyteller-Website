import { ThumbnailGalleryType } from "@Storyteller/types";
import { STIconButton } from "@StorytellerComponents/atoms";
import { getThumbnailGalleries } from "@StorytellerSanity/queries";
import {
    Center,
    Grid,
    GridItem,
    Spinner,
    useBreakpointValue,
    useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import ReactPagination from "react-paginate";
import AllGalleriesCard from "../AllGalleriesCard";
import { AllGalleriesContentProps } from "./props";

const AllGalleriesContent: React.FC<AllGalleriesContentProps> = (props) => {
    const { noOfPages, initialData, itemsPerPage, initialPage } = props;

    const toast = useToast();
    const router = useRouter();

    const [galleryData, setGalleryData] =
        useState<ThumbnailGalleryType[]>(initialData);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [currPage, setCurrPage] = useState<number>(initialPage);

    const pageRangeDisplayed = useBreakpointValue({ base: 1, sm: 2 });
    const marginPagesDisplayed = useBreakpointValue({ base: 1, sm: 2, md: 3 });

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

    const renderMainContent = () => {
        return isLoading ? (
            <Center>
                <Spinner
                    color="secondary"
                    width={["100px", "200px"]}
                    height={["100px", "200px"]}
                    emptyColor="darkAccent"
                    thickness="10px"
                    margin={["1.5rem", "3rem"]}
                />
            </Center>
        ) : (
            <Grid
                templateColumns={[
                    "repeat(1, 1fr)",
                    "repeat(1, 1fr)",
                    "repeat(2, 1fr)",
                    "repeat(3, 1fr)",
                ]}
                gap={["1.5rem", "2.5rem", "2.5rem"]}
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
        );
    };

    return (
        <>
            {renderMainContent()}
            <ReactPagination
                pageCount={noOfPages}
                pageRangeDisplayed={pageRangeDisplayed}
                marginPagesDisplayed={marginPagesDisplayed}
                forcePage={currPage}
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
                onPageChange={async (page) => {
                    window.scroll({
                        top: 0,
                        behavior: "smooth",
                    });
                    setIsLoading(true);
                    await router.push(
                        { query: { page: `${page.selected + 1}` } },
                        undefined,
                        { shallow: true }
                    );
                    getThumbnailGalleries(itemsPerPage, page.selected)
                        .then((data) => {
                            setGalleryData(data);
                            setCurrPage(page.selected);
                        })
                        .catch((err) => {
                            toast({
                                title: "Error!",
                                description: "Failed to retrieve data!",
                                status: "error",
                                duration: 5000,
                                isClosable: true,
                            });
                        })
                        .finally(() => {
                            setIsLoading(false);
                        });
                }}
                onClick={(event) => {
                    if (
                        event.isActive ||
                        (event.isNext && event.selected === noOfPages - 1) ||
                        (event.isPrevious && event.selected === 0) ||
                        isLoading
                    ) {
                        return false;
                    }
                }}
            />
        </>
    );
};

export default AllGalleriesContent;
