// Hard-coded links
import { headerLinks } from "@Storyteller/data/headerLinks";
import { HeaderItem } from "@StorytellerComponents/molecules";
import { Stack } from "@chakra-ui/react";
import { HeaderLinksSectionProps } from "./props";

/**
 * The component where we render all of the HeaderLinks into one group
 * Currently, the links are hard-coded into a file
 *
 * @param {HeaderLinksSectionProps} props Properties for the component. `onClose` function is important for Mobile Header (for closing ChakraUI drawer)
 * @returns {React.ReactNode} The entire section of text in Header that redirect users
 */
const HeaderLinksSection: React.FC<HeaderLinksSectionProps> = (props) => {
    const { onClose, ...stackProps } = props;
    return (
        <Stack
            gap={["1rem", "1rem", "3rem", "4rem", "4rem"]}
            w="100%"
            px={["0rem", "1rem", "2rem", "3rem", "3rem"]}
            flexDir={["column", "column", "row", "row", "row"]}
            {...stackProps}
        >
            {headerLinks.map((headerLink) => {
                return (
                    <HeaderItem
                        onClick={onClose ? onClose : () => {}}
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
