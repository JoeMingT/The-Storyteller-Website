import { IconButton, Image } from "@chakra-ui/react";
import { STIconButtonProps } from "./props";

const STIconButton: React.FC<STIconButtonProps> = (props) => {
    const { iconHeight, iconWidth, iconSrc, iconAlt, ...iconButtonProps } = props;

    return (
        <IconButton
            height={"auto"}
            width="auto"
            background="transparent"
            {...iconButtonProps}
            icon={
                <Image
                    w={`${iconWidth ? iconWidth : "50px"}`}
                    h={`${iconHeight ? iconHeight : "auto"}`}
                    alt={`${iconAlt}`}
                    src={`${iconSrc}`}
                />
            }
        />
    );
};

export default STIconButton;
