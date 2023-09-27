import { Box } from "@chakra-ui/react";
import { STComponentWrapperProps } from "./props";

const STComponentWrapper: React.FC<STComponentWrapperProps> = (props) => {
    const { children, ...containerProps } = props;
    return (
        <Box
            background="secondary"
            w="100%"
            h="100%"
            py={["3rem", "5rem"]}
            {...containerProps}
        >
            {children}
        </Box>
    );
};

export default STComponentWrapper;
