import { Box, Divider, HStack } from "@chakra-ui/react";
import { STDivider1Props } from "./props";

const STDivider1: React.FC<STDivider1Props> = (props: STDivider1Props) => {
    const { hStackProps, leftLineProps, centerDiamondProps, rightLineProps } =
        props;

    return (
        <HStack
            w="100%"
            justifyContent="center"
            alignItems="center"
            gap={["0rem", "1rem", "2rem"]}
            {...hStackProps}
        >
            <Divider
                border="1px solid #fff"
                w={["85vw", "30vw"]}
                opacity={"1"}
                {...leftLineProps}
            />
            <Box
                minW="10px"
                minH="10px"
                transform="rotate(45deg)"
                background={"white"}
                display={["none", "initial"]}
                {...centerDiamondProps}
            ></Box>
            <Divider
                border="1px solid #fff"
                w="30vw"
                opacity={"1"}
                display={["none", "initial"]}
                {...rightLineProps}
            />
        </HStack>
    );
};

export default STDivider1;
