import { STHeading, STText } from "@StorytellerComponents/atoms";
import { OurTeamCardProps } from "./props";

import { Card, CardBody, CardFooter, Image, VStack } from "@chakra-ui/react";

/**
 * The Card component in the Our Team section.
 * Each card contains the profile picture of the member as well as their name and position in the company.
 *
 * @param {OurTeamCardProps} props The member's information
 * @returns {React.ReactNode} The rendered Card with the member's details
 */
const OurTeamCard: React.FC<OurTeamCardProps> = (props) => {
    const { name, companyPos, imgUrl, ...cardProps } = props;
    return (
        <Card
            minH="100px"
            borderRadius="50px"
            boxShadow="0 0 20px 1px rgba(0,0,0,0.50)"
            {...cardProps}
        >
            {/* Body is the image */}
            <CardBody
                p="0"
                position="relative"
                display="inline-block"
                // After pseudo-element for the linear gradient overlay.
                _after={{
                    content: '""',
                    position: "absolute",
                    left: "0",
                    top: "0",
                    width: "100%",
                    height: "100%",
                    display: "inline-block",
                    background:
                        "linear-gradient(45deg, rgba(68, 68, 68, 0.90) 0%, rgba(68, 68, 68, 0.22) 100%, rgba(68, 68, 68, 0.09) 100%)",
                    zIndex: "10",
                    borderTopRadius: "50px",
                }}
            >
                <Image
                    src={imgUrl}
                    alt={"Profile Pic"}
                    borderTopRadius={"50px"}
                    display="block"
                    objectFit="cover"
                    objectPosition={"center"}
                    h="400px"
                    w="100%"
                    fill="turqoise"
                />
            </CardBody>
            {/* Footer is the name and position */}
            <CardFooter
                display="flex"
                flexDir="column"
                px={["2rem", "2rem", "2.5rem"]}
                py={["2rem", "2rem"]}
                background="linear-gradient(90deg, #97CDFF 0%, rgba(113, 186, 254, 0.50) 100%)"
                borderBottomRadius={"50px"}
            >
                <VStack
                    alignItems="flex-start"
                    justifyContent={"center"}
                    h={["6.5rem", "8rem"]}
                >
                    <STHeading
                        fontSize={["lg", "lg", "xl", "2xl", "2xl"]}
                        fontWeight="bold"
                        noOfLines={2}
                    >
                        {name}
                    </STHeading>
                    <STText noOfLines={2}>&mdash; {companyPos}</STText>
                </VStack>
            </CardFooter>
        </Card>
    );
};

export default OurTeamCard;
