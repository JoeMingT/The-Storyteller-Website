import { AllGalleries } from "@StorytellerComponents/organisms";
import {
    getThumbnailGalleries,
    getTotalGalleryLength,
} from "@StorytellerSanity/queries";
import { type GetServerSideProps } from "next";

interface GalleriesProps {
    totalGalleries: number;
    initialData: any;
    itemsPerPage: number;
    initialPage: number;
}

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
    const totalGalleries = await getTotalGalleryLength();
    const itemsPerPage = 9;
    const { page } = context.query;
    const initialPage = page ? Number(page) - 1 : 0;
    const initialData = await getThumbnailGalleries(itemsPerPage, initialPage);

    return {
        props: {
            totalGalleries,
            initialData,
            itemsPerPage,
            initialPage,
        },
    };
};
