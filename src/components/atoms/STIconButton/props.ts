import { IconButtonProps } from "@chakra-ui/react";

export interface STIconButtonProps extends IconButtonProps {
    iconWidth?: string | string[];
    iconHeight?: string | string[];
    iconSrc: string;
    iconAlt: string;
}
