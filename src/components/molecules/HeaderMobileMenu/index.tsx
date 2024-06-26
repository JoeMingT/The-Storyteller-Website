import { STIconButton } from "@StorytellerComponents/atoms";
import {
    HeaderIconButtonSection,
    HeaderLinksSection,
} from "@StorytellerComponents/molecules";

import {
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    FlexProps,
    useDisclosure,
} from "@chakra-ui/react";

import { useEffect } from "react";

/**
 * The Header component that is rendered when in mobile view
 *
 * @param {FlexProps} props Properties for the component, mainly for styling
 * @returns {React.ReactNode} The Header for Mobile view / devices
 */
const HeaderMobileMenu: React.FC<FlexProps> = (props: FlexProps): React.ReactNode => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    // Set event listener "resize" and close the drawer when resize width
    useEffect(() => {
        window.addEventListener("resize", (e) => {
            if (window.outerWidth >= 768) {
                onClose();
            }
        });
    });

    return (
        <>
            {/* Button to open the window */}
            <Flex right="0" {...props}>
                <STIconButton
                    iconSrc={"/assets/icon/menu-black.svg"}
                    iconAlt={"Open Menu Button"}
                    aria-label="Button to Open Mobile Menu"
                    onClick={onOpen}
                    iconWidth={["30px", "40px", "40px"]}
                />
            </Flex>
            {/* The menu that will be displayed when the button is clicked */}
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                size={"xs"}
            >
                <DrawerOverlay />
                <DrawerContent rowGap={"2rem"}>
                    <DrawerHeader
                        display={"flex"}
                        alignItems="flex-end"
                        justifyContent={"flex-end"}
                    >
                        <STIconButton
                            iconSrc={"/assets/icon/close-menu-black.svg"}
                            iconAlt={"Open Menu Button"}
                            aria-label="Button to Open Mobile Menu"
                            onClick={onClose}
                            iconWidth={["30px", "40px", "40px"]}
                        />
                    </DrawerHeader>
                    <DrawerBody pl="3rem">
                        <HeaderLinksSection onClose={onClose} />
                    </DrawerBody>
                    <DrawerFooter>
                        <HeaderIconButtonSection />
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default HeaderMobileMenu;
