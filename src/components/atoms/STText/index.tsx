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
        <Text fontSize={["md", "lg", "xl", "2xl", "3xl"]} {...textProps}>
            {children}
        </Text>
    );
};

export default STText;
