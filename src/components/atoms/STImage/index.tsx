import { STImageProps } from "./props";

import { useBreakpointValue } from "@chakra-ui/react";
import NextImage from "next/image";

/**
 * The Image component that will be used throughout the application.
 * This utilizes the NextImage optimization + the responsiveness of ChakraUI
 * However, for important images that needs to be rendered immediately, we will not use this
 * and use regular Chakra UI Image component. Either that, or we use the priority tag in NextImage
 *
 * @param {STImageProps} props The properties of the Image. Mainly height, width, src, and alt. No styling.
 * @return {React.ReactNode} The component Image
 */
const STImage: React.FC<STImageProps> = (props: STImageProps): React.ReactNode => {
    const { width, height, src, alt, ...rest } = props;
    const imgWidth = useBreakpointValue(props?.width)?.replace("px", "") || 0;
    const imgHeight = useBreakpointValue(props?.height)?.replace("px", "") || 0;

    return (
        <NextImage
            src={props.src}
            alt={props.alt}
            width={imgWidth}
            height={imgHeight}
            placeholder="blur"
        />
    );
};

export default STImage;
