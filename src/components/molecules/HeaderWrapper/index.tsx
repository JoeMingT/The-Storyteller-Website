import { Flex } from "@chakra-ui/react";
import { HeaderWrapperProps } from "./props";

/**
 * The wrapper component that wraps around both Mobile and Desktop view Headers
 * @param {HeaderWrapperProps} props Properties for the component
 * @returns {React.ReactNode} The rendered component
 */
const HeaderWrapper: React.FC<HeaderWrapperProps> = (props) => {
    const { children, headerRef } = props;

    return (
        <Flex
            w="100%"
            h="auto"
            position="sticky"
            background="#FFFFFF"
            top="0"
            left="0"
            zIndex={2}
            className="header"
            ref={headerRef}
            transition="200ms cubic-bezier(0.215,0.61,0.355,1);"
            py={["0.75rem"]}
            px={["1rem", "2rem", "2rem", "3rem", "3rem"]}
            justifyContent={"space-between"}
            alignItems={"center"}
        >
            {children}
        </Flex>
    );
};

export default HeaderWrapper;
