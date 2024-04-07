import { STHeading, SearchBar } from "@StorytellerComponents/atoms";

import { Stack } from "@chakra-ui/react";

/**
 * The Header of the All Gallery component. It contains 2 things. First is the title, the second is a search bar.
 * The title is straightforward so no explanation will be given.
 *
 * The search bar is a form in disguise, containing an Input field with a Button. When submitted it will make a request to the backend
 * to query and get data back. **Currently not implemented**
 *
 * @returns {React.ReactNode} The rendered header for the all gallery component
 */
const AllGalleriesHeader: React.FC<any> = (): React.ReactNode => {
    return (
        <Stack
            justifyContent={"space-between"}
            flexDir={["column", "row"]}
            gap={["0.5rem", "2.5rem"]}
        >
            <STHeading color="white">Galleries</STHeading>
            <SearchBar />
        </Stack>
    );
};

export default AllGalleriesHeader;
