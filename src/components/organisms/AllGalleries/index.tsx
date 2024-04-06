import { AllGalleriesHeader } from "@StorytellerComponents/molecules";
import { AllGalleriesProps } from "./props";

import { Box } from "@chakra-ui/react";
import { DisplayGalleries } from "@StorytellerComponents/atoms";

/**
 * The component used to render out the all galleries page. Fetches and showcases data stored in the server.
 *
 * @param {AllGalleriesProps} props The data for all of the galleries
 * @returns {React.ReactNode} The rendered component with the initial data pre-rendered
 */
const AllGalleries: React.FC<AllGalleriesProps> = (props) => {
    const { noOfPages, initialData, itemsPerPage, initialPage } = props;

    return (
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
            <DisplayGalleries
                noOfPages={noOfPages}
                initialData={initialData}
                itemsPerPage={itemsPerPage}
                initialPage={initialPage}
            />
        </Box>
    );
};

export default AllGalleries;
