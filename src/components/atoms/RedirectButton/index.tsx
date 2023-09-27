import { STButton } from "@StorytellerComponents/atoms";
import NextLink from "next/link";
import { RedirectButtonProps } from "./props";

/**
 * The component that renders a button that redirects users
 * using the Next Link component
 * 
 * @param {RedirectButtonProps} props The properties for the component, mainly href is important
 * @returns {React.ReactNode} The Button that redirects users
 */
const RedirectButton: React.FC<RedirectButtonProps> = (props) => {
    const { href, children, ...buttonProps } = props;
    return (
        <NextLink href={href}>
            <STButton {...buttonProps}>{children}</STButton>
        </NextLink>
    );
};

export default RedirectButton;
