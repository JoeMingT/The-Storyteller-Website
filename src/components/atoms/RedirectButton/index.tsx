import { STButton } from "@StorytellerComponents/atoms";
import NextLink from "next/link";
import { RedirectButtonProps } from "./props";

const RedirectButton: React.FC<RedirectButtonProps> = (props) => {
    const { href, children, ...buttonProps } = props;
    return (
        <NextLink href={href}>
            <STButton {...buttonProps}>{children}</STButton>
        </NextLink>
    );
};

export default RedirectButton;
