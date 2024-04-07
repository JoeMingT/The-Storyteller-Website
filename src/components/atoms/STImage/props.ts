import { ImageProps } from "@chakra-ui/react";

// Extending ImageProps to allow for the use of useBreakpointValue
export interface STImageProps extends ImageProps {
    width: any;
    height: any;
    src: any;
    alt: string;
}
