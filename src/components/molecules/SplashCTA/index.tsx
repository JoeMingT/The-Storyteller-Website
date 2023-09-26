import { STButton, STText } from "@StorytellerComponents/atoms";

/**
 * Component to render the Call to Action button in the splash section
 * Basically the big "Contact Us!" button.
 * @returns {React.ReactNode} The rendered component
 */
const SplashCTA: React.FC<any> = () => {
    return (
        <STButton
            p={["1rem", "1rem", "1.5rem", "2rem"]}
            onClick={() => {
                console.log("Test");
            }}
        >
            <STText>Contact Us!</STText>
        </STButton>
    );
};

export default SplashCTA;
