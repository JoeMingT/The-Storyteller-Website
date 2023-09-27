import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        heading: "Roboto Slab, Times New Roman, serif",
        body: "Nunito, Roboto, sans-serif",
    },
    fontSizes: {
        xs: "0.625rem", // 10px
        sm: "0.75rem", // 12px
        md: "0.875rem", // 14px
        lg: "1rem", // 16px
        xl: "1.125rem", // 18px
        "2xl": "1.25rem", // 20px
        "3xl": "1.5rem", // 25px
        "4xl": "1.875rem", // 30px
        "5xl": "2.25rem", // 36px
        "6xl": "2.875rem", // 46px
        "7xl": "3.5rem", // 56px
        "8xl": "4.5rem", // 72px
        "9xl": "6rem", // 96px
    },
    colors: {
        primary: "#444444",
        secondary: "#EFEDE7",
    },
    sizes: {
        "container.xl": "1200px",
        "container.dashboard": "1350px",
        "container.form": "550px",
    },
    components: {},
});
export default theme;
