import { STButtonProps } from "./props";
import { Button } from "@chakra-ui/react";

function renderColor(color: string | undefined, type: string): string {
    return color ? color : type === 'primary' ? "#97CDFF" : "000000"
}

const STButton: React.FC<STButtonProps> = (props) => {
    const { children, primaryColor, secondaryColor } = props;

    return (
        <Button
            backgroundColor={renderColor(primaryColor, 'primary')}
            color={renderColor(secondaryColor, 'secondary')}
            borderRadius={`3.125rem`}
            _hover={{
                backgroundColor: renderColor(secondaryColor, 'secondary'),
                color: renderColor(primaryColor, 'primary')
            }}
            {...props}
        >
            {children}
        </Button>
    );
};

export default STButton;
