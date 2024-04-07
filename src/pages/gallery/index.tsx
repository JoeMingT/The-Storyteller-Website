import { defaultGalleryData } from "@Storyteller/data/defaultGalleryData";
import { AllGalleries } from "@StorytellerComponents/organisms";
import {
    getAllGalleriesThumbnail,
    getTotalGalleriesLength,
} from "@StorytellerSanity/queries";
import { type GetServerSideProps } from "next";

interface GalleriesProps {
    totalGalleries: number;
    initialData: any;
    itemsPerPage: number;
    initialPage: number;
}

/**
 * Route: "/gallery"
 *
 * Components Related: "AllGalleries"
 *
 * This is the home page for all galleries. Provide a menu / hub that shows all galleries, starting from the most recent to the most oldest.
 * Act as a portfolio for users to view, and also for previous clients to view back their photos.
 */
export default function Galleries({
    totalGalleries,
    initialData,
    itemsPerPage,
    initialPage,
}: GalleriesProps) {
    const noOfPages = Math.ceil(totalGalleries / itemsPerPage);

    return (
        <>
            <AllGalleries
                noOfPages={noOfPages}
                initialData={initialData}
                itemsPerPage={itemsPerPage}
                initialPage={initialPage}
            />
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    // Get total amount of galleries, used to calculate total amount of pages needed to render in the component
    const totalGalleries = await getTotalGalleriesLength();
    // Items per single page
    const itemsPerPage = 9;
    // The query parameter used to allow users to navigate to their specified page quickly
    // ?page=2 -> Redirect users to page 2 of all galleries
    const { page } = context.query;
    // Initial Page, if there is any existing query parameters, if not, redirect to page 1
    const initialPage = page ? Number(page) - 1 : 0;
    // Initial Data for the first page, fetched and rendered server-side beforehand
    const initialData = await getAllGalleriesThumbnail(
        itemsPerPage,
        initialPage
    );

    // Filter to check if client is initialized
    

    return {
        props: {
            totalGalleries: totalGalleries ? totalGalleries : defaultGalleryData.length,
            initialData: initialData ? initialData : defaultGalleryData.slice(initialPage*9, initialPage*9 + 9),
            itemsPerPage,
            initialPage,
        },
    };
};
