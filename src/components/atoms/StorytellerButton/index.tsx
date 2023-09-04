import { StorytellerButtonProps } from "./props";
import { Button } from "@chakra-ui/react";

const StorytellerButton: React.FC<StorytellerButtonProps> = (props) => {
    const { children } = props;

    // Set default values if no color set
    let { primaryColor, secondaryColor } = props;
    if (!primaryColor) {
        primaryColor = "#97CDFF"
    }
    if (!secondaryColor) {
        secondaryColor = "#000000"
    }

    return (
        <Button
            backgroundColor={`${primaryColor}`}
            color={`${secondaryColor}`}
            borderRadius={`3.125rem`}
            _hover={{
                backgroundColor: `${secondaryColor}`,
                color: `${primaryColor}`
            }}
            {...props}
        >
            {children}
        </Button>
    );
};

export default StorytellerButton;
