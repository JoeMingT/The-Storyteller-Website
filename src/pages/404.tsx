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
 * Components Related: "OurCompany", "OurTeam"
 *
 * This is the about page component. It provides more details regarding the company and the team behind the company. Meant to be informative for users to find our more
 * about the companies achievements, visions and missions, and the person in charge.
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
                    gap="2.5rem"
                    background="secondary"
                    p="5rem"
                    borderRadius="50px"
                    boxShadow="5px 5px 10px rgb(100,100,100, 0.5)"
                >
                    <Box textAlign={"center"}>
                        <STHeading>404</STHeading>
                        <STHeading>Page Not Found!</STHeading>
                    </Box>
                    <Box
                        textAlign="center"
                        display="flex"
                        flexDir="column"
                        gap="2.5rem"
                    >
                        <STText maxW="33vw">
                            The page you are looking for does not exist or is
                            not available. Click the button below to return to
                            Home Page.
                        </STText>
                        <RedirectButton href="/">
                            Click Here to Return Home
                        </RedirectButton>
                    </Box>
                </VStack>
            </Center>
        </>
    );
}
