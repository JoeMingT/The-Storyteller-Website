import {
    HeaderIconButtonSection,
    HeaderLinksSection,
} from "@StorytellerComponents/molecules";

import { Flex, FlexProps } from "@chakra-ui/react";

/**
 * The Header component that is rendered when in desktop view
 *
 * @param {FlexProps} props Properties for the component. Allow for passing styling.
 * @returns {React.ReactNode} The Header for Desktop view / devices
 */
const HeaderDesktopMenu: React.FC<FlexProps> = (props: FlexProps): React.ReactNode => {
    return (
        <Flex
            flexDir={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            w="100%"
            {...props}
        >
            <HeaderLinksSection />
            <HeaderIconButtonSection />
        </Flex>
    );
};

export default HeaderDesktopMenu;
