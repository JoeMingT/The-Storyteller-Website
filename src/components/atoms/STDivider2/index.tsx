import { Box, Divider } from "@chakra-ui/react";
import { STDivider2Props } from "./props";

/**
 * This is the Divider component meant to create a horizontal line dividing two components.
 * This is the second version of the Divider.
 *
 * @returns {React.ReactNode} The Component for a Divider Ver 2.
 */
const STDivider2: React.FC<STDivider2Props> = (props: STDivider2Props) => {
    const { boxProps, leftLineProps, rightLineProps } = props;

    return (
        // A horizontal divider consisting of two lines with different length and colour merged together to form one straight line
        <Box display={"flex"} flexDir="row" py="1.5rem" {...boxProps}>
            <Divider border="2px solid #ffffff" w="33.33%" {...leftLineProps} />
            <Divider
                border="2px solid rgba(202, 184, 185, 0.23)"
                w="66.67%"
                {...rightLineProps}
            />
        </Box>
    );
};

export default STDivider2;
