import { extendTheme } from "@chakra-ui/react";
import { Prompt, Red_Hat_Display } from "next/font/google";

const prompt = Prompt({
    subsets: ["latin"],
    style: ["normal", "italic"],
    weight: ["400", "500", "700"],
    variable: "--heading-font",
    display: "swap",
});

const red_hat_display = Red_Hat_Display({
    subsets: ["latin"],
    style: ["normal", "italic"],
    weight: ["400", "500", "700"],
    variable: "--text-font",
    display: "swap",
});

const theme = extendTheme({
    fonts: {
        heading: `${prompt.style.fontFamily}, Roboto Slab, Times New Roman, serif`,
        body: `${red_hat_display.style.fontFamily}, Roboto Slab, Times New Roman, serif`,
    },
    fontSizes: {
        "3xs": "0.45rem",
        "2xs": "0.625rem", // 10px
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        md: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
        "5xl": "3rem", // 48px
        "6xl": "3.75rem", // 60px
        "7xl": "4.5rem", // 72px
        "8xl": "6rem", // 96px
        "9xl": "8rem", // 128px
    },
    colors: {
        primary: "#444444",
        secondary: "#EFEDE7",
        highlight: "#97CDFF",
        lightAccent: "#CAB8B9",
        darkAccent: "#7E7F7A",
    },
    sizes: {
        "container.xl": "1200px",
        "container.dashboard": "1350px",
        "container.form": "550px",
    },
    components: {},
});
export default theme;
