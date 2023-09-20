import { Text } from "@chakra-ui/react";
import { STTextProps } from "./props";

const STText: React.FC<STTextProps> = (props) => {
    const { children, ...textProps } = props;

    return (
        <Text fontSize={["lg", "xl", "2xl", "2xl", "3xl"]} {...textProps}>
            {children}
        </Text>
    );
};

export default STText;
