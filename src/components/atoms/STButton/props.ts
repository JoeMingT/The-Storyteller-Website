import { ButtonProps } from "@chakra-ui/react";

export interface STButtonProps extends ButtonProps {
  primaryColor?: string;
  secondaryColor?: string;
  children?: React.ReactElement | string
}