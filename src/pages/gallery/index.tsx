import { AllGalleries } from "@StorytellerComponents/organisms";
import {
    getGalleries,
    getTotalGalleryLength,
} from "@StorytellerSanity/queries";
import { type GetServerSideProps } from "next";

interface GalleriesProps {
    totalGalleries: number;
    initialData: any;
    itemsPerPage: number;
}

export default function Galleries({
    totalGalleries,
    initialData,
    itemsPerPage,
}: GalleriesProps) {
    const noOfPages = Math.ceil(totalGalleries / itemsPerPage);

    return (
        <>
            <AllGalleries
                noOfPages={noOfPages}
                initialData={initialData}
                itemsPerPage={itemsPerPage}
            />
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const totalGalleries = await getTotalGalleryLength();
    const itemsPerPage = 9;
    const initialData = await getGalleries(itemsPerPage, 0);

    return {
        props: {
            test: "test text",
            totalGalleries,
            initialData,
            itemsPerPage,
        },
    };
};
