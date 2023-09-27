import { Button } from "@chakra-ui/react";
import { STButtonProps } from "./props";

/**
 * The function to render the color depending on the type of it
 * @param {string | undefined} color The color passed from outside
 * @param {string} type Secondary or Primary type color that will be rendered
 * @returns {string} The color that will be rendered
 */
function renderColor(color: string | undefined, type: string): string {
    return color ? color : type === "primary" ? "highlight" : "primary";
}

/**
 * The basic Button component for the application with the base settings.
 *
 * @param {STButtonProps} props Properties for the component
 * @returns {React.ReactNode} The Button component
 */
const STButton: React.FC<STButtonProps> = (props) => {
    const { children, primaryColor, secondaryColor, ...buttonProps } = props;

    return (
        <Button
            backgroundColor={renderColor(primaryColor, "primary")}
            color={renderColor(secondaryColor, "secondary")}
            borderRadius={`3.125rem`}
            _hover={{
                backgroundColor: renderColor(secondaryColor, "secondary"),
                color: renderColor(primaryColor, "primary"),
            }}
            p={["1rem", "1rem", "1.5rem", "2rem"]}
            {...buttonProps}
        >
            {children}
        </Button>
    );
};

export default STButton;
