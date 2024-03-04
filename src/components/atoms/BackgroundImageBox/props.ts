import { BoxProps } from "@chakra-ui/react";

export interface BackgroundImageBoxProps extends BoxProps {
    backgroundImage: string | string[];
    children?: React.ReactNode | string;
}
