import { GallerySearchPage } from "@StorytellerComponents/organisms";
import {
    getQueriedGalleriesLength,
    getQueriedGalleriesThumbnail,
} from "@StorytellerSanity/queries";
import { type GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";

interface GallerySearchPageProps {
    queryParams: ParsedUrlQuery;
    queriedGalleriesLength: number;
    initialData: any;
    itemsPerPage: number;
    initialPage: number;
}

/**
 * Route: "/gallery"
 *
 * Components Related: "GallerySearchPage"
 *
 * This is the search result page, redirected after the user have submitted a search query from the Gallery page.
 * (Or technically manually reaching this page). The data fetching is similar to the gallery home page, with slight modifications.
 * This page is normally accompanied with 2 query params: "page" and "searchQuery" which are used to fetch related search results.
 */
export default function GallerySearchPageProps({
    queryParams,
    queriedGalleriesLength,
    initialData,
    itemsPerPage,
    initialPage,
}: GallerySearchPageProps) {
    const noOfPages = Math.ceil(queriedGalleriesLength / itemsPerPage);

    return (
        <>
            <GallerySearchPage
                queryParams={queryParams}
                noOfPages={noOfPages}
                initialData={initialData}
                itemsPerPage={itemsPerPage}
                initialPage={initialPage}
            />
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    // Get the search query, splitted into an array for futher processing later
    const parsedQueryParams = context.query.searchQuery
        ? context.query.searchQuery.toString().split(" ")
        : [""];

    // Get total amount of galleries, used to calculate total amount of pages needed to render in the component
    const queriedGalleriesLength = await getQueriedGalleriesLength(
        parsedQueryParams
    );
    // Items per single page
    const itemsPerPage = 9;
    // The query parameter used to allow users to navigate to their specified page quickly
    // ?page=2 -> Redirect users to page 2 of all galleries
    const { page } = context.query;
    // Initial Page, if there is any existing query parameters, if not, redirect to page 1
    const initialPage = page ? Number(page) - 1 : 0;
    // Initial Data for the first page, fetched and rendered server-side beforehand
    const initialData = await getQueriedGalleriesThumbnail(
        itemsPerPage,
        initialPage,
        parsedQueryParams
    );

    return {
        props: {
            queryParams: context.query,
            queriedGalleriesLength,
            initialData,
            itemsPerPage,
            initialPage,
        },
    };
};
