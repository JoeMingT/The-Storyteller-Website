import {
    SelectedGalleryContent,
    SelectedGalleryModal,
    SelectedGalleryTitle,
} from "@StorytellerComponents/molecules";

const SelectedGallery: React.FC<any> = (props) => {
    const { selectedGalleryData } = props;
    const { name, venue, clients, photographers, images } = selectedGalleryData;

    return (
        <>
            <SelectedGalleryTitle
                clients={clients}
                galleryName={name}
                photographers={photographers}
                venue={venue}
            />
            <SelectedGalleryContent images={images} />
        </>
    );
};

export default SelectedGallery;
