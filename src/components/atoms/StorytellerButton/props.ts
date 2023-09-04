import { ButtonProps } from "@chakra-ui/react";

export interface StorytellerButtonProps extends ButtonProps {
  primaryColor?: string;
  secondaryColor?: string;
  children?: React.ReactElement | string
}