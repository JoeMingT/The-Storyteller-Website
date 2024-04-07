import { STTextProps } from "./props";

import { Text } from "@chakra-ui/react";

/**
 * The basic Text component for the application with the base settings.
 *
 * @param {STTextProps} props Properties for the component
 * @returns {React.ReactNode} The rendered Text component
 */
const STText: React.FC<STTextProps> = (props: STTextProps): React.ReactNode => {
    const { children, ...textProps } = props;

    return (
        <Text fontSize={["md", "md", "lg", "xl", "xl"]} {...textProps}>
            {children}
        </Text>
    );
};

export default STText;
