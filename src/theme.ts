import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        heading: "Roboto Slab, Times New Roman, serif",
        body: "Nunito, Roboto, sans-serif",
    },
    colors: {
        primary: "#514EFF",
        white: "#FFFFFF",
    },
    backgroundColor: {},
    fontSizes: {
        xs: "0.75rem", //12px
        sm: "0.875rem", // 14px
        md: "1rem", // 15px
        lg: "1.125rem", //18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 25px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
        "5xl": "2.875rem", // 46px
        "6xl": "3.5rem", // 56px
        "7xl": "4.5rem", // 72px
        "8xl": "6rem", // 96px
        "9xl": "8rem", // 128px
    },
    sizes: {
        "container.xl": "1200px",
        "container.dashboard": "1350px",
        "container.form": "550px",
    },
    components: {
        stepperBox: {
            baseStyle: {
                py: "20px",
                borderRadius: "10px",
                mb: "28px",
                w: "500px",
                justifyContent: "space-between",
                alignItems: "center",
                px: "25px",
            },
            variants: {
                normal: {
                    border: "1px solid #FFFFFF",
                    color: "#FFFFFF",
                },
                success: {
                    border: "1px solid #4EFF9F",
                    color: "#4EFF9F",
                },
                locked: {
                    border: "1px solid #407DC1",
                    color: "#407DC1",
                },
            },
            defaultProps: {
                variant: "normal",
            },
        },
    },
});
export default theme;
