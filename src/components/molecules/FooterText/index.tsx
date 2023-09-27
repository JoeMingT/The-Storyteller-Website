import { STText } from "@StorytellerComponents/atoms";
import { GridItem } from "@chakra-ui/react";

/**
 * Component to render the text in the Footer. The copyright text.
 *
 * @return {React.ReactNode} The copyright text in the Footer
 */
const FooterText: React.FC<any> = (props) => {
    return (
        <GridItem
            display="flex"
            alignItems="center"
            justifyContent={"flex-start"}
        >
            <STText fontSize={["sm", "md"]} color="#BC9597">
                © 2023 TheStoryteller
            </STText>
        </GridItem>
    );
};

export default FooterText;
