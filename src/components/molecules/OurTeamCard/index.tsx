import { STText } from "@StorytellerComponents/atoms";
import { Card, CardBody, CardFooter, Image } from "@chakra-ui/react";
import { OurTeamCardProps } from "./props";

const OurTeamCard: React.FC<OurTeamCardProps> = (props) => {
    const { name, companyPos, imgUrl, ...cardProps } = props;
    return (
        <Card
            minH="100px"
            h="100%"
            borderRadius="50px"
            boxShadow="0 0 20px 1px rgba(0,0,0,0.50)"
            {...cardProps}
        >
            <CardBody
                p="0"
                // background="linear-gradient(90deg, rgba(255, 255, 255, 0.90) 0%, rgba(255, 255, 255, 0.81) 53.13%, rgba(255, 255, 255, 0.55) 83.33%, rgba(255, 255, 255, 0.05) 100%)"
                // zIndex="1"
                // borderTopRadius={"50px"}
                position="relative"
                display="inline-block"
                // background=""
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
                }}
            >
                <Image
                    src={imgUrl}
                    alt={"Profile Pic"}
                    borderTopRadius={"50px"}
                    display="block"
                    w="auto"
                />
            </CardBody>
            <CardFooter
                display="flex"
                flexDir="column"
                px={["2rem", "2rem", "2.5rem"]}
                py={["2rem", "2rem"]}
                background="linear-gradient(90deg, #97CDFF 0%, rgba(113, 186, 254, 0.50) 100%)"
                borderBottomRadius={"50px"}
            >
                <STText fontWeight="bold" noOfLines={2}>
                    {name}
                </STText>
                <STText noOfLines={2}>&mdash; {companyPos}</STText>
            </CardFooter>
        </Card>
    );
};

export default OurTeamCard;
