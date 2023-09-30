import {
    OurCompanyLogo,
    OurCompanyWriteup,
} from "@StorytellerComponents/molecules";
import { VStack } from "@chakra-ui/react";

const OurCompany: React.FC<any> = (props) => {
    return (
        <VStack
            alignItems="center"
            justifyContent="center"
            background="primary"
        >
            <OurCompanyLogo />
            <OurCompanyWriteup />
        </VStack>
    );
};

export default OurCompany;
