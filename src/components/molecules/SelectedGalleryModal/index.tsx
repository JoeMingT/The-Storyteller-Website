import {
    Image,
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
} from "@chakra-ui/react";

const SelectedGalleryModal: React.FC<any> = (props) => {
    const { isOpen, onClose, selectedImageIndex, images } = props;
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent minW="80vw">
                <ModalBody>
                    <Image src={images[selectedImageIndex].url} />
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default SelectedGalleryModal;
