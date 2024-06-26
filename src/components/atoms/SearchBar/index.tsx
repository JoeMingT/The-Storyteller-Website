import { STFormTextField, STIconButton } from "@StorytellerComponents/atoms";
import { Divider, HStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { SearchBarProps } from "./props";

/**
 * The component for a reusable search bar. Allow for taking in an input and redirecting the user to the
 * search page (/search) when submitting the input. There is no validation on the form, except for ensuring that there's no empty string.
 *
 * @param {SearchBarProps} props The properties for the component. Mainly properties for styling purposes.
 * @returns {React.ReactNode} The search bar component.
 */
const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps): React.ReactNode => {
    const { type = "primary", hStackProps, inputFieldProps } = props;
    const router = useRouter();

    return (
        <Formik
            initialValues={{ query: "" }}
            onSubmit={(formData) => {
                if (formData.query) {
                    router.push({
                        pathname: `/gallery/search`,
                        query: { searchQuery: formData.query, page: 1 },
                    });
                }
            }}
        >
            <Form noValidate>
                <HStack
                    border={`1px solid ${type === "primary" ? "#fff" : "#000"}`}
                    h="100%"
                    borderRadius="25px"
                    alignItems={"center"}
                    justifyContent="center"
                    px={["1rem"]}
                    maxW={["300px", "500px"]}
                    {...hStackProps}
                >
                    <STFormTextField
                        name="query"
                        type="text"
                        placeholder="Search..."
                        fontSize={["md", "lg", "xl"]}
                        size={["md", "lg", "xl"]}
                        variant="unstyled"
                        color={type === "primary" ? "white" : "black"}
                        px="0.5rem"
                        py="0"
                        pl="0"
                        {...inputFieldProps}
                    />
                    <Divider
                        orientation="vertical"
                        border={`1px solid ${
                            type === "primary" ? "#fff" : "#000"
                        }`}
                        h="2rem"
                        mx="0.5rem"
                    />
                    <STIconButton
                        iconSrc={`/assets/icon/search-icon-${
                            type === "primary" ? "white" : "black"
                        }.svg`}
                        iconAlt="Search Icon"
                        iconWidth={["30px", "40px", "50px"]}
                        type="submit"
                    />
                </HStack>
            </Form>
        </Formik>
    );
};

export default SearchBar;
