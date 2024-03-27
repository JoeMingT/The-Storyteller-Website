import { InputProps, StackProps } from "@chakra-ui/react";

export interface SearchBarProps {
    type?: "primary" | "secondary";
    hStackProps?: StackProps;
    inputFieldProps?: InputProps;
}
