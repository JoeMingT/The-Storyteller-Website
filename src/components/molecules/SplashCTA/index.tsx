import { STButton, STText } from "@StorytellerComponents/atoms";

const SplashCTA: React.FC<any> = () => {
    return (
        <STButton
            p={["1rem", "1rem", "1.5rem"]}
            onClick={() => {
                console.log("Test");
            }}
        >
            <STText>Contact Us!</STText>
        </STButton>
    );
};

export default SplashCTA;
