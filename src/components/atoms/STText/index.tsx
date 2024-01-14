import { STTextProps } from "./props";

import { Text } from "@chakra-ui/react";

/**
 * The basic Text component for the application with the base settings.
 *
 * @param {STTextProps} props Properties for the component
 * @returns {React.ReactNode} The rendered Text component
 */
const STText: React.FC<STTextProps> = (props) => {
    const { children, ...textProps } = props;

    return (
        <Text
            fontStyle={"italic"}
            fontSize={["md", "md", "lg", "xl", "xl"]}
            {...textProps}
        >
            {children}
        </Text>
    );
};

export default STText;
