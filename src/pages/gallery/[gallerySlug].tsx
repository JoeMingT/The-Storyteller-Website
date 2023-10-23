import { SelectedGalleryType } from "@Storyteller/types/sanity/SelectedGalleryType";
import { SelectedGallery } from "@StorytellerComponents/organisms";
import { getSelectedGallery } from "@StorytellerSanity/queries";

import { GetServerSideProps } from "next";

interface SelectedGalleryPageProps {
    selectedGalleryData: SelectedGalleryType;
}

/**
 * Route: "/gallery/..."
 *
 * Components Related: "SelectedGallery"
 *
 * This is page you will be redirected to when you want to view a specific gallery and its related data.
 * This is a catch all route as the id / slugs are changing depending on the gallery name and id.
 */
const SelectedGalleryPage: React.FC<SelectedGalleryPageProps> = (props) => {
    const { selectedGalleryData } = props;

    return (
        <>
            <SelectedGallery selectedGalleryData={selectedGalleryData} />
        </>
    );
};

export default SelectedGalleryPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const currSlug = context.params?.gallerySlug;
    const selectedGalleryData = await getSelectedGallery(String(currSlug));

    return {
        props: {
            selectedGalleryData,
        },
        notFound: !selectedGalleryData,
    };
};
