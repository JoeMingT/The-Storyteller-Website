import { SelectedGalleryModal } from "@StorytellerComponents/molecules";
import { SelectedGalleryContentProps } from "./props";

import { Box, Image, useDisclosure } from "@chakra-ui/react";

import { useState } from "react";
import dynamic from "next/dynamic";

/**
 * The main content of a selected gallery that renders all of the images of said gallery. Essentially, it will load images in a masonry layout (a layout
 * similar to Pinterest) and display them. The layout is acheived using a third party library.
 *
 * **Originally planned to use Next Image for the gallery images but it doesn't seem to work with the third-party masonry layout.
 * May consider finding new libraries in the future
 *
 * @param {SelectedGalleryContentProps} props The props that contains all the images to render
 * @returns {React.ReactNode} The rendered images with the correct layout
 */
const SelectedGalleryContent: React.FC<SelectedGalleryContentProps> = (
    props: SelectedGalleryContentProps
): React.ReactNode => {
    const { galleryName, images } = props;

    const ResponsiveMasonry = dynamic(
      () => import("react-responsive-masonry").then((mod) => mod.ResponsiveMasonry),
      {
        loading: () => <p>Loading...</p>,
        ssr: false,
      }
    );
    const Masonry = dynamic(
      () => import("react-responsive-masonry").then((mod) => mod.default),
      {
        loading: () => <p>Loading...</p>,
        ssr: false,
      }
    );

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

    const nextImageTransition = () => {
        const newIndex =
            selectedImageIndex < images.length - 1
                ? selectedImageIndex + 1
                : selectedImageIndex;
        setSelectedImageIndex(newIndex);
    };

    const prevImageTransition = () => {
        const newIndex =
            selectedImageIndex > 0
                ? selectedImageIndex - 1
                : selectedImageIndex;
        setSelectedImageIndex(newIndex);
    };

    const renderImageNodes = () => {
        return images?.map((image, index) => {
            return (
                <Image
                    key={`${index}`}
                    maxWidth="100%"
                    borderRadius={"xl"}
                    src={image.url}
                    alt={`${galleryName} Image ${index + 1}`}
                    boxShadow="xl"
                    onClick={() => {
                        setSelectedImageIndex(index);
                        onOpen();
                    }}
                    _hover={{
                        cursor: "pointer",
                    }}
                />
            );
        });
    };

    return (
        <>
            <SelectedGalleryModal
                isOpen={isOpen}
                onClose={onClose}
                selectedImageIndex={selectedImageIndex}
                images={images}
                nextImageTransition={nextImageTransition}
                prevImageTransition={prevImageTransition}
            />
            <Box
                padding={["2.5rem", "5rem"]}
                background="secondary"
                minH="100vh"
            >
                {/* Masonry to provide the correct layout */}
                <ResponsiveMasonry
                    columnsCountBreakPoints={{
                        480: 1,
                        768: 2,
                        992: 3,
                        1280: 4,
                    }}
                >
                    <Masonry gutter="2rem">{renderImageNodes()}</Masonry>
                </ResponsiveMasonry>
            </Box>
        </>
    );
};

export default SelectedGalleryContent;
