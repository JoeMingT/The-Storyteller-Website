import {
    RedirectButton,
    STHeading,
    STText,
} from "@StorytellerComponents/atoms";
import { Box, Center, VStack } from "@chakra-ui/react";

interface NotFoundPageProps {}

/**
 * Route: "Any Route not found"
 *
 * Components Related: N/A
 *
 * This is the page that will be displayed when the user enters a link or page that does not exists or unavailable to them.
 * Contains a button to redirect to Home Page "/"
 */
export default function NotFoundPage(props: NotFoundPageProps) {
    return (
        <>
            <Center
                flexDir={"column"}
                position="fixed"
                top="0"
                left="0"
                height="100vh"
                w="100%"
            >
                <VStack
                    gap={["1rem", "2.5rem"]}
                    background="secondary"
                    mx={["1rem", "0rem"]}
                    p={["2.5rem", "5rem"]}
                    borderRadius="50px"
                    boxShadow="5px 5px 10px rgb(100,100,100, 0.5)"
                    textAlign={"center"}
                    alignContent="center"
                    justifyContent={"center"}
                >
                    <Box textAlign={"center"}>
                        <STHeading>404</STHeading>
                        <STHeading>Page Not Found!</STHeading>
                    </Box>
                    <STText maxW={["100%", "50vw", "33vw"]}>
                        The page you are looking for does not exist or is not
                        available. Click the button below to return to Home
                        Page.
                    </STText>
                    <RedirectButton href="/">
                        Click Here to Return Home
                    </RedirectButton>
                </VStack>
            </Center>
        </>
    );
}
