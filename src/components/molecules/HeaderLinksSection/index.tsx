// Hard-coded links
import { headerLinks } from "@Storyteller/data/headerLinks";
import { HeaderItem } from "@StorytellerComponents/molecules";
import { HeaderLinksSectionProps } from "./props";

import { Stack } from "@chakra-ui/react";

/**
 * The component where we render all of the HeaderLinks into one group
 * Currently, the links are hard-coded into a file
 *
 * @param {HeaderLinksSectionProps} props Properties for the component. `onClose` function is important for Mobile Header (for closing ChakraUI drawer)
 * @returns {React.ReactNode} The entire section of text in Header that redirect users
 */
const HeaderLinksSection: React.FC<HeaderLinksSectionProps> = (props: HeaderLinksSectionProps): React.ReactNode => {
    const { onClose, ...stackProps } = props;
    return (
        <Stack
            gap={["1rem", "1rem", "1rem", "2.5em", "4rem"]}
            w="100%"
            px={["0rem", "1rem", "1rem", "2rem", "3rem"]}
            flexDir={["column", "column", "column", "row", "row", "row"]}
            {...stackProps}
        >
            {headerLinks?.map((headerLink) => {
                return (
                    <HeaderItem
                        onClick={onClose ? onClose : () => {}}
                        key={headerLink.title}
                        href={headerLink.url}
                        textAlign={["left", "left", "left", "center"]}
                        fontSize={["2xl", "2xl", "2xl", "xl", "xl"]}
                    >
                        {headerLink.title}
                    </HeaderItem>
                );
            })}
        </Stack>
    );
};

export default HeaderLinksSection;
