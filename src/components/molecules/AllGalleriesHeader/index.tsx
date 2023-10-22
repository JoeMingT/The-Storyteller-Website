import { STHeading, STIconButton } from "@StorytellerComponents/atoms";

import { Divider, FormControl, Input, Stack } from "@chakra-ui/react";

import { ChangeEvent, FormEvent, useState } from "react";

const AllGalleriesHeader: React.FC<any> = () => {
    const [query, setQuery] = useState<string>("");

    const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery(event?.currentTarget ? event.currentTarget.value : "");
    };

    const handleQuerySubmit = (event: FormEvent<HTMLFormElement>) => {
        console.log("Test");
        console.log(query);
    };

    return (
        <Stack
            justifyContent={"space-between"}
            flexDir={["column", "row"]}
            gap={["0.5rem", "2.5rem"]}
        >
            <STHeading textDecoration={"underline"} color="white">
                Galleries
            </STHeading>
            <form onSubmit={handleQuerySubmit}>
                <FormControl
                    display="flex"
                    flexDir={"row"}
                    border="1px solid #fff"
                    h="100%"
                    borderRadius="25px"
                    alignItems={"center"}
                    px={["1rem"]}
                    maxW={["300px", "500px"]}
                >
                    <Input
                        fontSize={["md", "lg", "xl"]}
                        size={["md", "lg", "xl"]}
                        variant="unstyled"
                        color="white"
                        placeholder="Search..."
                        borderRadius="0px"
                        px="0.5rem"
                        type="text"
                        onChange={handleQueryChange}
                    />
                    <Divider
                        orientation="vertical"
                        border="1px solid white"
                        h="2rem"
                        mx="1rem"
                    />
                    <STIconButton
                        iconSrc="/assets/icon/search-icon-white.svg"
                        iconAlt="Search Icon"
                        iconWidth={["30px", "40px", "50px"]}
                        type="submit"
                    />
                </FormControl>
            </form>
        </Stack>
    );
};

export default AllGalleriesHeader;
