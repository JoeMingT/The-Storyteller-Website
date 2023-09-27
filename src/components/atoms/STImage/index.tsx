import { useBreakpointValue } from "@chakra-ui/react";
import NextImage from "next/image";
import { STImageProps } from "./props";

/**
 * The Image component that will be used throughout the application.
 * This utilizes the NextImage optimization + the responsiveness of ChakraUI
 * However, for important images that needs to be rendered immediately, we will not use this
 * and use regular Chakra UI Image component.
 * @param {STImageProps} props The properties of the Image. Mainly height, width, src, and alt
 * @return {React.ReactNode} The rendered component
 */
const STImage: React.FC<STImageProps> = (props) => {
    const width = useBreakpointValue(props?.width)?.replace("px", "") || 0;
    const height = useBreakpointValue(props?.height)?.replace("px", "") || 0;

    return (
        <NextImage
            src={props.src}
            alt={props.alt}
            width={width}
            height={height}
            placeholder="blur"
        />
    );
};

export default STImage;
