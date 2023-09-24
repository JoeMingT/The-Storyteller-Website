import { Flex, FlexProps } from "@chakra-ui/react";
import {
    HeaderIconButtonSection,
    HeaderLinksSection,
} from "@StorytellerComponents/atoms";

/**
 * The Header component that is rendered when in desktop view
 * @param {FlexProps} props Properties for the component
 * @returns {React.ReactNode} The rendered component
 */
const HeaderDesktopMenu: React.FC<FlexProps> = (props) => {
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