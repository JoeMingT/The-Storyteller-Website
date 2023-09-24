import NextLink from "next/link";
import { STText } from "..";
import { HeaderItemProps } from "./props";

/**
 * This component is responsible for rendering each of the text
 * that redirects you to another page in the Header. For example,
 * the Home, About Us, and Galleries text in the Header.
 * @param {HeaderItemProps} props Properties for the component
 * @returns {React.ReactNode} The rendered component
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
