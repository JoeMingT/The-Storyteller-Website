import { socialMediaLinks } from "@Storyteller/data/socialMediaLinks";
import { STIconButton } from "@StorytellerComponents/atoms";
import { HStack, StackProps } from "@chakra-ui/react";

/**
 * Component that renders the Facebook, Instagram and Xiao Hong Shu logos
 * located in the header
 *
 * @param {StackProps} props Properties that can be passed into the component
 * @returns {React.ReactNode} The entire Header Icon section
 */
const HeaderIconButtonSection: React.FC<StackProps> = (props) => {
    return (
        <HStack gap={["1rem", "1rem", "1.5rem", "2rem", "2rem"]} {...props}>
            {socialMediaLinks.map((link) => {
                return (
                    <STIconButton
                        iconSrc={`${link.iconSrc}`}
                        iconAlt={`${link.iconAlt}`}
                        aria-label={`${link.ariaLabel}`}
                        onClick={() => {
                            window.open(`${link.url}`, "_blank");
                        }}
                        key={`${link.iconSrc}`}
                        iconWidth={["30px", "30px", "40px", "50px", "50px"]}
                    />
                );
            })}
        </HStack>
    );
};

export default HeaderIconButtonSection;
