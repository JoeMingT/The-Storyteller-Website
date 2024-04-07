import {
    RedirectButton,
    STHeading,
    STText,
} from "@StorytellerComponents/atoms";
import { AllGalleriesCardProps } from "./props";

import {
    Box,
    Card,
    CardBody,
    CardFooter,
    useBreakpointValue,
} from "@chakra-ui/react";
import NextImage from "next/image";

/**
 * The Card component that renders an overview / summary of the galleries data.
 * Each card will display a Thumbnail image, the title, and a button that redirects the user to the selected gallery.
 *
 * @param {AllGalleriesCardProps} props The properties required to render the card. For the image, title and link for the button.
 * @returns {React.ReactNode} The rendered card component with the details passed into it.
 */
const AllGalleriesCard: React.FC<AllGalleriesCardProps> = (props: AllGalleriesCardProps): React.ReactNode => {
    const { imgUrl, galleryTitle, galleryUrl, ...cardProps } = props;
    const borderRadius = useBreakpointValue({ base: "25px", sm: "50px" });

    return (
        <Card
            {...cardProps}
            borderRadius={borderRadius}
            backgroundColor="secondary"
            boxShadow="0px 5px 50px 5px rgb(0,0,0,0.25)"
        >
            <CardBody
                p="0"
                position="relative"
                h="100%"
                w="100%"
                minH={["300px", "375px", "450px"]}
            >
                <NextImage
                    src={imgUrl}
                    alt={"Gallery Thumbnail"}
                    fill={true}
                    style={{
                        borderTopLeftRadius: borderRadius,
                        borderTopRightRadius: borderRadius,
                        objectFit: "cover",
                        objectPosition: "center",
                        zIndex: 0,
                    }}
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw"
                />
            </CardBody>
            <CardFooter
                display="flex"
                flexDir="column"
                p={["1.5rem", "2rem"]}
                pt="1rem"
                w="100%"
                h="100%"
                gap={["0.5rem", "1rem"]}
            >
                <Box
                    h={["6rem", "7.5rem"]}
                    display="flex"
                    alignItems={"center"}
                >
                    <STHeading
                        fontWeight="bold"
                        noOfLines={3}
                        fontSize={["lg", "lg", "xl", "2xl", "2xl"]}
                        color="primary"
                    >
                        {galleryTitle}
                    </STHeading>
                </Box>
                <RedirectButton
                    href={`gallery/${galleryUrl}`}
                    w="100%"
                    borderRadius={"10px"}
                    p={["1rem", "1rem", "1.5rem", "1.75rem"]}
                >
                    <STText fontSize={["lg", "lg", "xl", "2xl", "2xl"]}>
                        View Gallery
                    </STText>
                </RedirectButton>
            </CardFooter>
        </Card>
    );
};

export default AllGalleriesCard;
