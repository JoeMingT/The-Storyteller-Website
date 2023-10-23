import {
    SelectedGalleryContent,
    SelectedGalleryTitle,
} from "@StorytellerComponents/molecules";
import { SelectedGalleryProps } from "./props";

/**
 * The component that renders the details of the selected gallery content.
 * It contains the client name (who commissioned for the session), photographers for the session, the pictures taken, and so on.
 *
 * @param {SelectedGalleryProps} props The props containing the selected gallery data fetch from backend
 * @returns {React.ReactNode} The rendered Selected Gallery component
 */
const SelectedGallery: React.FC<SelectedGalleryProps> = (props) => {
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
            <SelectedGalleryContent galleryName={name} images={images} />
        </>
    );
};

export default SelectedGallery;
