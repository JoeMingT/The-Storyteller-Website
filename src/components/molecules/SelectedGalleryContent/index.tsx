import { Box, Image, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { SelectedGalleryModal } from "..";
import { SelectedGalleryContentProps } from "./props";

const SelectedGalleryContent: React.FC<SelectedGalleryContentProps> = (
    props
) => {
    const { images } = props;

    const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <SelectedGalleryModal
                isOpen={isOpen}
                onClose={onClose}
                selectedImageIndex={selectedImageIndex}
                images={images}
            />
            <Box padding="5rem" background="secondary">
                <ResponsiveMasonry
                    columnsCountBreakPoins={{ 480: 1, 768: 2, 992: 3, 1280: 3 }}
                >
                    <Masonry gutter="2rem">
                        {images.map((image, index) => {
                            return (
                                <Image
                                    key={`${index}`}
                                    maxWidth="100%"
                                    src={image.url}
                                    alt="Test"
                                    boxShadow="xl"
                                    onClick={() => {
                                        console.log(`Print ${index}`);
                                        setSelectedImageIndex(index);
                                        onOpen();
                                    }}
                                    _hover={{
                                        cursor: "pointer",
                                    }}
                                />
                            );
                        })}
                    </Masonry>
                </ResponsiveMasonry>
            </Box>
        </>
    );
};

export default SelectedGalleryContent;
