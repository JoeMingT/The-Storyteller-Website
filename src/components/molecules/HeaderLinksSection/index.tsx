// Hard-coded links
import { headerLinks } from "@Storyteller/data/headerLinks";
import { HeaderItem } from "..";
import { Stack, StackProps } from "@chakra-ui/react";

/**
 * The component where we render all of the HeaderLinks into one group
 * Currently, the links are hard-coded into a file
 *
 * @param {StackProps} props Properties for the component
 * @returns {React.ReactNode} The entire section of text in Header that redirect users
 */
const HeaderLinksSection: React.FC<StackProps> = (props) => {
    return (
        <Stack
            gap={["1rem", "1rem", "3rem", "4rem", "4rem"]}
            w="100%"
            px={["0rem", "1rem", "2rem", "3rem", "3rem"]}
            flexDir={["column", "column", "row", "row", "row"]}
            {...props}
        >
            {headerLinks.map((headerLink) => {
                return (
                    <HeaderItem
                        key={headerLink.title}
                        href={headerLink.url}
                        textAlign={["left", "left", "center"]}
                        fontSize={["2xl", "2xl", "lg", "xl", "xl"]}
                    >
                        {headerLink.title}
                    </HeaderItem>
                );
            })}
        </Stack>
    );
};

export default HeaderLinksSection;
