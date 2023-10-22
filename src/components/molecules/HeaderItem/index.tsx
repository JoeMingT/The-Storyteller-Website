import { STText } from "@StorytellerComponents/atoms";
import { HeaderItemProps } from "./props";

import NextLink from "next/link";

/**
 * This component is responsible for rendering each of the text
 * that redirects you to another page in the Header. For example,
 * the Home, About Us, and Galleries text in the Header.
 *
 * @param {HeaderItemProps} props Properties for the component
 * @returns {React.ReactNode} The each individual text in the Header that redirects users
 */
const HeaderItem: React.FC<HeaderItemProps> = (props) => {
    const { children, href, ...textProps } = props;

    return (
        <NextLink href={href}>
            {/* Duplicate to avoid element shifting due to being bolded */}
            <STText
                textAlign={"center"}
                _hover={{
                    fontWeight: "bold",
                    textDecoration: "underline",
                }}
                {...textProps}
            >
                {children}
            </STText>
            <STText
                position={"relative"}
                fontWeight={"bold"}
                textStyle={"underline"}
                height="0"
                overflow={"hidden"}
                textAlign={"center"}
                {...textProps}
            >
                {children}
            </STText>
        </NextLink>
    );
};

export default HeaderItem;
