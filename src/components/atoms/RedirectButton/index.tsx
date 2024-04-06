import { STButton } from "@StorytellerComponents/atoms";
import { RedirectButtonProps } from "./props";

import NextLink from "next/link";

/**
 * The component that renders a button that redirects users
 * using the Next Link component
 *
 * @param {RedirectButtonProps} props The properties for the component, mainly href is important
 * @returns {React.ReactNode} The Button that redirects users
 */
const RedirectButton: React.FC<RedirectButtonProps> = (props: RedirectButtonProps): React.ReactNode => {
    const { href, children, nextLinkProps, ...buttonProps } = props;
    return (
        <NextLink {...nextLinkProps} href={href}>
            <STButton {...buttonProps}>{children}</STButton>
        </NextLink>
    );
};

export default RedirectButton;
