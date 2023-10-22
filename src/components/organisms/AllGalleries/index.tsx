import { STComponentWrapper } from "@StorytellerComponents/atoms";
import {
    AllGalleriesContent,
    AllGalleriesHeader,
} from "@StorytellerComponents/molecules";
import { Box } from "@chakra-ui/react";

const AllGalleries: React.FC<any> = (props) => {
    const { noOfPages, initialData, itemsPerPage } = props;

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
                />
            </Box>
        </STComponentWrapper>
    );
};

export default AllGalleries;
