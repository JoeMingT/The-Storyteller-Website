import { SelectedGallery } from "@StorytellerComponents/organisms";
import { getSelectedGallery } from "@StorytellerSanity/queries";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

interface SelectedGalleryProps {}

const GallerySlug: React.FC<any> = (props) => {
    const { selectedGalleryData } = props;

    console.log(selectedGalleryData);
    const router = useRouter();

    return (
        <>
            <SelectedGallery selectedGalleryData={selectedGalleryData} />
        </>
    );
};

export default GallerySlug;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const currSlug = context.params?.gallerySlug;
    const selectedGalleryData = await getSelectedGallery(String(currSlug));

    return {
        props: {
            currSlug,
            selectedGalleryData,
        },
        notFound: !selectedGalleryData,
    };
};
