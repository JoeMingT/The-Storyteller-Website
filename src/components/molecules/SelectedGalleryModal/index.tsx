import { useCheckIsMobile } from "@Storyteller/hooks";
import { STIconButton } from "@StorytellerComponents/atoms";
import { SelectedGalleryModalProps } from "./props";

import {
    Image,
    Modal,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
} from "@chakra-ui/react";

import { useEffect } from "react";

/**
 * The modal that is displayed when the user clicks on an image in the selected gallery. This will bring up a bigger / more zoomed-in
 * version of the selected image. It also provides two navigation button to load the next or previous image and a close button at the top right.
 *
 * @param {SelectedGalleryModalProps} props The props required for opening closing modal and loading the images
 * @returns {React.ReactNode} The rendered Selected Gallery title / top part
 */
const SelectedGalleryModal: React.FC<SelectedGalleryModalProps> = (props) => {
    const {
        isOpen,
        onClose,
        selectedImageIndex,
        images,
        nextImageTransition,
        prevImageTransition,
    } = props;

    // Check if it's a mobile device.
    const { isMobile, checkIsMobile } = useCheckIsMobile();

    useEffect(() => {
        checkIsMobile();
    });

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            isCentered={true}
            // If a mobile, allow scrolling for panning purposes
            blockScrollOnMount={isMobile ? false : true}
            allowPinchZoom={true}
            // No motion preset for custom animations
            motionPreset={"none"}
        >
            <ModalOverlay />
            <ModalContent
                background="transparent"
                boxShadow={"none"}
                alignItems="center"
                minW="fit-content"
                flexDir="row"
                animation={"buttonFadeInAnimation ease 0.5s"}
            >
                <ModalCloseButton
                    position="fixed"
                    top="0"
                    right="0"
                    color="white"
                    size="lg"
                    m="20px"
                    border="3px solid white"
                />
                <STIconButton
                    iconSrc="/assets/icon/left-nav-arrow-white.svg"
                    iconAlt="White Colored Left Arrow"
                    iconWidth={["30px", "50px", "60px", "80px", "100px"]}
                    h="50vh"
                    onClick={prevImageTransition}
                    position={"fixed"}
                    left="0"
                    animation={"buttonFadeInAnimation ease 0.5s"}
                />
                <Image
                    p="3rem"
                    maxH="90vh"
                    src={images[selectedImageIndex].url}
                    alt={`Selected Image ${selectedImageIndex + 1}`}
                    animation={"imageFadeInAnimation ease 0.5s"}
                />
                <STIconButton
                    iconSrc="/assets/icon/right-nav-arrow-white.svg"
                    iconAlt="White Colored Right Arrow"
                    iconWidth={["30px", "50px", "60px", "80px", "100px"]}
                    h="50vh"
                    onClick={nextImageTransition}
                    position={"fixed"}
                    right="0"
                    animation={"buttonFadeInAnimation ease 0.5s"}
                />
            </ModalContent>
        </Modal>
    );
};

export default SelectedGalleryModal;
