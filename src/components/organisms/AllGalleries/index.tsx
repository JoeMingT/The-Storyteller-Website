import { STComponentWrapper } from "@StorytellerComponents/atoms";
import {
    AllGalleriesContent,
    AllGalleriesHeader,
} from "@StorytellerComponents/molecules";
import { Box } from "@chakra-ui/react";
import { AllGalleriesProps } from "./props";

const AllGalleries: React.FC<AllGalleriesProps> = (props) => {
    const { noOfPages, initialData, itemsPerPage, initialPage } = props;

    return (
        <STComponentWrapper>
            <Box
                h="100%"
                background="primary"
                px={["0rem", "2.5rem", "5rem"]}
                py={["2.5rem", "5rem"]}
                display="flex"
                flexDir="column"
                gap={["3rem", "3rem", "5rem"]}
            >
                <AllGalleriesHeader />
                <AllGalleriesContent
                    noOfPages={noOfPages}
                    initialData={initialData}
                    itemsPerPage={itemsPerPage}
                    initialPage={initialPage}
                />
            </Box>
        </STComponentWrapper>
    );
};

export default AllGalleries;
