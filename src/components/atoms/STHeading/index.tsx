import { Heading } from "@chakra-ui/react";
import { STHeadingProps } from "./props";

const STHeading: React.FC<STHeadingProps> = (props) => {
    const { children, ...headingProps } = props;

    return (
        <Heading fontSize={["md", "lg", "xl", "xl", "2xl"]} {...headingProps}>
            {children}
        </Heading>
    );
};

export default STHeading;
