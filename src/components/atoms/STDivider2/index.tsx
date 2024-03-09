import { Box, Divider } from "@chakra-ui/react";
import { STDivider2Props } from "./props";

const STDivider2: React.FC<STDivider2Props> = (props: STDivider2Props) => {
    const { boxProps, leftLineProps, rightLineProps } = props;

    return (
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
