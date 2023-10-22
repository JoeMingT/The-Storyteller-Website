import { FooterIcons, FooterText } from "@StorytellerComponents/molecules";
import { Grid } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

/**
 * The Footer component that will be rendered out in the application.
 * This component will be rendered on every page of the application and will render dynamically.
 *
 * @returns {React.ReactNode} The rendered Footer component
 */
const Footer: React.FC<any> = (props) => {
    const router = useRouter();

    // Check if the body of the page is overflowing or not
    // If it is, then we set the footer at the end of the page
    // If not, we will fix it at the bottom (since there's no scrolling to hide it)
    const [isOverflowing, setIsOverflowing] = useState<boolean>(true);
    useEffect(() => {
        const el = document.getElementById("root");
        if (el) {
            setIsOverflowing(el.scrollHeight > window.innerHeight);
        }
    }, [router.pathname]);

    return (
        <Grid
            w="100%"
            h="auto"
            backgroundColor="secondary"
            position={isOverflowing ? "relative" : "fixed"}
            bottom="0"
            left="0"
            py="10px"
            px={["2rem", "3rem"]}
            gap="10px"
            templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
            boxShadow={"0px -2px 5px 1px rgba(0, 0, 0, 0.20) "}
            zIndex={4}
        >
            <FooterText />
            <FooterIcons />
        </Grid>
    );
};

export default Footer;
