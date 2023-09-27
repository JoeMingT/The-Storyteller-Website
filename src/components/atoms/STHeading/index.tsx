import { Heading } from "@chakra-ui/react";
import { STHeadingProps } from "./props";

/**
 * The basic Heading component for the application with the base settings.
 *
 * @param {STHeadingProps} props Properties for the component
 * @returns {React.ReactNode} The Heading text component
 */
const STHeading: React.FC<STHeadingProps> = (props) => {
    const { children, ...headingProps } = props;

    return (
        <Heading
            fontSize={["xl", "2xl", "3xl", "4xl", "5xl", "6xl"]}
            {...headingProps}
        >
            {children}
        </Heading>
    );
};

export default STHeading;
