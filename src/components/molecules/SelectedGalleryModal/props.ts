export interface SelectedGalleryModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedImageIndex: number;
    images: { url: string }[];
    nextImageTransition: () => void;
    prevImageTransition: () => void;
}
