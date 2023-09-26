import { useBreakpointValue } from "@chakra-ui/react";
import NextImage from "next/image";

const STImage: React.FC<any> = (props) => {
    const width = useBreakpointValue(props?.width)?.replace("px", "") || 0;
    const height = useBreakpointValue(props?.height)?.replace("px", "") || 0;

    return (
        <NextImage
            src={props.src}
            alt={props.alt}
            width={width}
            height={height}
        />
    );
};

export default STImage;
