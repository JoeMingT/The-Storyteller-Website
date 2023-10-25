import { socialMediaLinks } from "@Storyteller/data/socialMediaLinks";
import { STIconButton } from "@StorytellerComponents/atoms";

import { GridItem } from "@chakra-ui/react";

/**
 * Component to render the Icons in the Footer which
 * will redirect to the corresponding pages.
 * Almost one-to-one to HeaderIconButtonSection, with slight
 * styling changes for Footer
 *
 * @return {React.ReactNode} The icons in the Footer
 */
const FooterIcons: React.FC<any> = (props) => {
    return (
        <GridItem
            display="flex"
            alignItems="center"
            justifyContent={["flex-start", "flex-end"]}
            flexDir="row"
            gap={["1rem", "1.5rem", "2rem"]}
        >
            {socialMediaLinks?.map((link) => {
                return (
                    <STIconButton
                        iconSrc={`${link.iconSrc}`}
                        iconAlt={`${link.iconAlt}`}
                        aria-label={`${link.ariaLabel}`}
                        onClick={() => {
                            window.open(`${link.url}`, "_blank");
                        }}
                        key={`${link.iconSrc}`}
                        iconWidth={["16px", "18px", "20px", "20px", "20px"]}
                        /* Too small need to force minimum width */
                        minW={["16px", "18px", "20px", "20px", "20px"]}
                    />
                );
            })}
        </GridItem>
    );
};

export default FooterIcons;
