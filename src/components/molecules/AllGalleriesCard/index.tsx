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
    GridItem,
    useBreakpointValue,
} from "@chakra-ui/react";
import NextImage from "next/image";

const AllGalleriesCard: React.FC<AllGalleriesCardProps> = (props) => {
    const { imgUrl, galleryTitle, galleryUrl, ...cardProps } = props;
    const borderRadius = useBreakpointValue({ base: "25px", sm: "50px" });

    return (
        <GridItem>
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
                    // Will see if need to add in or not later
                    // _after={{
                    //     content: '""',
                    //     position: "absolute",
                    //     left: "0",
                    //     top: "0",
                    //     width: "100%",
                    //     height: "100%",
                    //     display: "inline-block",
                    //     background:
                    //         "linear-gradient(45deg, rgba(68, 68, 68, 0.90) 0%, rgba(68, 68, 68, 0.22) 100%, rgba(68, 68, 68, 0.09) 100%)",
                    //     zIndex: "10",
                    // }}
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
        </GridItem>
    );
};

export default AllGalleriesCard;
