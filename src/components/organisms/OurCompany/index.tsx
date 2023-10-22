import {
    OurCompanyLogo,
    OurCompanyWriteup,
} from "@StorytellerComponents/molecules";

import { VStack } from "@chakra-ui/react";

/**
 * The component that displays the details of the company. It's a more specific version of About Us.
 * It can be a "writeup" for the company. Meaning could include Mission and Vision, history of company, etc.
 *
 * @returns The rendered Our Company component.
 */
const OurCompany: React.FC<any> = (props) => {
    return (
        <VStack
            alignItems="center"
            justifyContent="center"
            background="primary"
            py={["5rem"]}
        >
            <OurCompanyLogo />
            <OurCompanyWriteup />
        </VStack>
    );
};

export default OurCompany;
