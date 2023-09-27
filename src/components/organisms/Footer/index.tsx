import { FooterIcons, FooterText } from "@StorytellerComponents/molecules";
import { Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Footer: React.FC<any> = (props) => {
    const [isOverflowing, setIsOverflowing] = useState<boolean>(false);
    useEffect(() => {
        const el = document.getElementById("root");
        if (el) {
            setIsOverflowing(el.scrollHeight > window.innerHeight);
        }
    }, []);

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
        >
            <FooterText />
            <FooterIcons />
        </Grid>
    );
};

export default Footer;
