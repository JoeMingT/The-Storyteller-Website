import {
    OurCompanyLogo,
    OurCompanyWriteup,
} from "@StorytellerComponents/molecules";

import { VStack } from "@chakra-ui/react";
import { OurCompanyProps } from "./props";

/**
 * The component that displays the details of the company. It's a more specific version of About Us.
 * It can be a "writeup" for the company. Meaning could include Mission and Vision, history of company, etc.
 *
 * @param {OurCompanyProps} props The data for the writeup.
 * @returns {React.ReactNode} The rendered Our Company component.
 */
const OurCompany: React.FC<OurCompanyProps> = (props: OurCompanyProps): React.ReactNode => {
    const { aboutUsFullText } = props;
    return (
        <VStack
            alignItems="center"
            justifyContent="center"
            background="primary"
            pb="5rem"
        >
            <OurCompanyLogo />
            <OurCompanyWriteup aboutUsFullText={aboutUsFullText} />
        </VStack>
    );
};

export default OurCompany;
