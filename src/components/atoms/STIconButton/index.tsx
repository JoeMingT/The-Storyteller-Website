import { IconButton, Image } from "@chakra-ui/react";
import { STIconButtonProps } from "./props";

/**
 * The basic IconButton component for the application with the base settings.
 * @param {STIconButtonProps} props Properties for the component
 * @returns {React.ReactNode} The rendered component
 */
const STIconButton: React.FC<STIconButtonProps> = (props) => {
    const { iconHeight, iconWidth, iconSrc, iconAlt, ...iconButtonProps } =
        props;

    return (
        <IconButton
            height={"auto"}
            width="auto"
            background="transparent"
            _hover={{
                background: "transparent",
            }}
            {...iconButtonProps}
            icon={
                <Image
                    w={iconWidth ? iconWidth : "50px"}
                    h={iconHeight ? iconHeight : "auto"}
                    alt={`${iconAlt}`}
                    src={`${iconSrc}`}
                />
            }
        />
    );
};

export default STIconButton;
