import { Box, Divider, HStack } from "@chakra-ui/react";
import { STDivider1Props } from "./props";

/**
 * This is the Divider component meant to create a horizontal line dividing two components.
 * This is the first version of the Divider.
 *
 * @returns {React.ReactNode} The Component for a Divider Ver 1.
 */
const STDivider1: React.FC<STDivider1Props> = (props: STDivider1Props): React.ReactNode => {
    const { hStackProps, leftLineProps, centerDiamondProps, rightLineProps } =
        props;

    return (
        // A horizontal divider consisting of two lines separated by a diamond
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
