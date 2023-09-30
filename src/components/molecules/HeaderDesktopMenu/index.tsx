import { Flex, FlexProps } from "@chakra-ui/react";
import {
    HeaderIconButtonSection,
    HeaderLinksSection,
} from "@StorytellerComponents/molecules";

/**
 * The Header component that is rendered when in desktop view
 *
 * @param {FlexProps} props Properties for the component
 * @returns {React.ReactNode} The Header for Desktop view / devices
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
