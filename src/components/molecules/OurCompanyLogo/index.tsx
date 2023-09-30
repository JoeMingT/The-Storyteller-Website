import StorytellerLogo from "@/public/assets/logo/storyteller_logo_rectangle.png";
import { STImage } from "@StorytellerComponents/atoms";
import { Box } from "@chakra-ui/react";

/**
 * The component that renders out the Storyteller Logo in the Our Company section in the About page.
 *
 * @returns {React.ReactNode} The rendered Logo with a background color
 */
const OurCompanyLogo: React.FC<any> = (props) => {
    return (
        <Box
            background={"secondary"}
            w="100%"
            py={["1rem", "2rem"]}
            display="flex"
            alignItems="center"
            justifyContent={"center"}
            mt={"3rem"}
        >
            <STImage
                src={StorytellerLogo}
                alt="Storyteller Logo"
                width={["150px", "200px", "300px"]}
                height=""
            />
        </Box>
    );
};

export default OurCompanyLogo;
