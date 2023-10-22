import { ThumbnailGalleryType } from "@Storyteller/types";
import {
    AboutUs,
    GalleryPreview,
    Splash,
} from "@StorytellerComponents/organisms";
import { getThumbnailGalleries } from "@StorytellerSanity/queries";
import { type GetServerSideProps } from "next";

interface LandingPageProps {
    galleryPreviewData: ThumbnailGalleryType[];
}

export default function Landing({ galleryPreviewData }: LandingPageProps) {
    return (
        <>
            <Splash />
            <AboutUs />
            <GalleryPreview galleryPreviewData={galleryPreviewData} />
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const galleryPreviewData = await getThumbnailGalleries(3, 0);

    return {
        props: {
            galleryPreviewData: galleryPreviewData,
        },
    };
};
