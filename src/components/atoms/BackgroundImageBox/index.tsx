import { Box } from "@chakra-ui/react";
import { BackgroundImageBoxProps } from "./props";

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
