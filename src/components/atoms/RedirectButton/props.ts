import { ButtonProps } from "@chakra-ui/react";

export interface RedirectButtonProps extends ButtonProps {
    children: string | React.ReactNode;
    href: string;
}
