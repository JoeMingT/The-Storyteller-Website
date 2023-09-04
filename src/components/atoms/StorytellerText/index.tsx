import { Text } from "@chakra-ui/react";
import { StorytellerTextProps } from "./props";

const StorytellerText: React.FC<StorytellerTextProps> = (props) => {
    const { children } = props;

    return (
        <Text fontSize={["xl", "xl", "2xl", "2xl", "4xl"]} {...props}>
            {children}
        </Text>
    );
};

export default StorytellerText;
