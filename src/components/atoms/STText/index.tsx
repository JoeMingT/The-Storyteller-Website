import { Text } from "@chakra-ui/react";
import { STTextProps } from "./props";

const STText: React.FC<STTextProps> = (props) => {
    const { children, ...textProps } = props;

    return (
        <Text fontSize={["sm", "md", "lg", "lg", "xl"]} {...textProps}>
            {children}
        </Text>
    );
};

export default STText;
