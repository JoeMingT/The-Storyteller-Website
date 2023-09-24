import { STButton } from "@StorytellerComponents/atoms";
import { ButtonProps, Image } from "@chakra-ui/react";

/**
 * The component where we render the logo in the header, where it can redirect
 * us back to the home page
 * @param {ButtonProps} props Properties for the component
 * @returns {React.ReactNode} The rendered component
 */
const HeaderLogoButton: React.FC<ButtonProps> = (props) => {
    return (
        <>
            <STButton
                backgroundColor={"transparent"}
                _hover={{ background: "transparent" }}
                w={["110px", "110px", "110px", "130px", "130px"]}
                h="auto"
                {...props}
            >
                <Image
                    src={"/assets/logo/storyteller_logo_rectangle.png"}
                    alt="The Storyteller Logo Button"
                    w="auto"
                    h="auto"
                />
            </STButton>
        </>
    );
};

export default HeaderLogoButton;
