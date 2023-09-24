import { Text } from "@chakra-ui/react";
import { STTextProps } from "./props";

/**
 * The basic Text component for the application with the base settings.
 * @param {STTextProps} props Properties for the component
 * @returns {React.ReactNode} The rendered component
 */
const STText: React.FC<STTextProps> = (props) => {
    const { children, ...textProps } = props;

    return (
        <Text fontSize={["sm", "md", "lg", "lg", "xl"]} {...textProps}>
            {children}
        </Text>
    );
};

export default STText;
