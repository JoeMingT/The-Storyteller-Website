import { Box } from "@chakra-ui/react";
import { BackgroundImageBoxProps } from "./props";

/**
 * The component that is used to render a background image + any gradient overlapping the image
 * Used in the Gallery Preview and Splash components. To be honest, it's a pretty jank implementation.
 * This is mainly a workaround for the "blur" filter as it applies to even everything that is wrapped within the div component.
 *
 * @param {BackgroundImageBoxProps} props - The properties for the component. Mainly backgroundImage that's important and is required
 * @returns {React.ReactNode} The rendered Background Image Box component
 */
const BackgroundImageBox: React.FC<BackgroundImageBoxProps> = (props) => {
    const { backgroundImage, ...boxProps } = props;
    return (
        <Box
            w="100%"
            overflow="hidden"
            backgroundImage={backgroundImage}
            backgroundSize={"cover"}
            backgroundPosition={"center"}
            backgroundRepeat={"no-repeat"}
            filter={"blur(2px)"}
            flexDir="column"
            zIndex="-1"
            position="absolute"
            {...boxProps}
        ></Box>
    );
};

export default BackgroundImageBox;
