import { IconButtonProps } from "@chakra-ui/react";

export interface STIconButtonProps extends IconButtonProps {
  iconWidth?: string;
  iconHeight?: string;
  iconSrc: string;
  iconAlt: string;
}