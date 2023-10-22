import { ButtonProps } from "@chakra-ui/react";
import { LinkProps } from "next/link";

export interface RedirectButtonProps extends ButtonProps {
    children: string | React.ReactNode;
    href: string;
    nextLinkProps?: LinkProps;
}
