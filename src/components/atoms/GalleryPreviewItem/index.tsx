import { Box, Divider, HStack } from "@chakra-ui/react";
import React from "react";
import { BackgroundImageBox, RedirectButton, STHeading, STText } from "..";

const GalleryPreviewItem: React.FC<any> = (props) => {
    return (
        <Box h="100%" display="flex" alignItems="center">
            {/* The Background image for the gallery showcase */}
            <BackgroundImageBox
                backgroundImage={`linear-gradient(90deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.75) 100%), url(${props.url})`}
                h="100%"
                minH={["450px", "1000px"]}
                maxH={["1000px", "2000px"]}
            />
            <Box
                w="100%"
                display="flex"
                alignItems="center"
                flexDir="column"
                gap={["3rem", "3rem", "5rem"]}
                py={["7.5rem", "12.5rem"]}
                h="auto"
            >
                {/* Heading Text for Title */}
                <STHeading
                    w={["80%", "50%"]}
                    textAlign="center"
                    noOfLines={3}
                    color="#fff"
                >
                    {props.title}
                </STHeading>
                {/* The seperator line */}
                <HStack
                    w="100%"
                    justifyContent="center"
                    alignItems="center"
                    gap={["0rem", "1rem", "2rem"]}
                >
                    <Divider
                        border="1px solid #fff"
                        w={["85vw", "30vw"]}
                        opacity={"1"}
                    />
                    <Box
                        w="10px"
                        h="10px"
                        transform="rotate(45deg)"
                        background={"white"}
                        display={["none", "initial"]}
                    ></Box>
                    <Divider
                        border="1px solid #fff"
                        w="30vw"
                        opacity={"1"}
                        display={["none", "initial"]}
                    />
                </HStack>
                {/* Redirect Button */}
                <RedirectButton
                    backgroundColor="transparent"
                    border="3px solid #97CDFF"
                    color="highlight"
                    _hover={{ backgroundColor: "highlight", color: "white" }}
                    href="#"
                >
                    <STText>View Here</STText>
                </RedirectButton>
            </Box>
        </Box>
    );
};

export default GalleryPreviewItem;
