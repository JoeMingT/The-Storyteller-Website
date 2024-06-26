import { STHeadingProps } from "./props";

import { Heading } from "@chakra-ui/react";

/**
 * The basic Heading component for the application with the base settings.
 *
 * @param {STHeadingProps} props Properties for the component
 * @returns {React.ReactNode} The Heading text component
 */
const STHeading: React.FC<STHeadingProps> = (props: STHeadingProps): React.ReactNode => {
    const { children, ...headingProps } = props;

    return (
        <Heading
            fontSize={["xl", "2xl", "3xl", "4xl", "5xl"]}
            {...headingProps}
        >
            {children}
        </Heading>
    );
};

export default STHeading;
