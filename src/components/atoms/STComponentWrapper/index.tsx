import { STComponentWrapperProps } from "./props";

import { Box } from "@chakra-ui/react";

/**
 * The component that wraps around other main components in the application
 * It is meant to provide an event amount of padding (at the top and bottom)
 * between each component so it looks even.
 *
 * @param {STComponentWrapperProps} props The properties for the component, Children will be wrapped around the padding
 * @returns {React.ReactNode} The children component wrapped with this component
 */
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
