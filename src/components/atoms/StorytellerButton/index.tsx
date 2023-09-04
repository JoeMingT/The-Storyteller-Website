import { ButtonProps } from "./props";
import { Button } from "@chakra-ui/react";

const StorytellerButton: React.FC<ButtonProps> = (buttonProps) => {
    const { props, children } = buttonProps;

    // Set default values if no color set
    let { primaryColor, secondaryColor } = buttonProps;
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
