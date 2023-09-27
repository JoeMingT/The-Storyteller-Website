import { STText } from "@StorytellerComponents/atoms";

/**
 * The component that contains the About Us write up text.
 * The text currently is hard-coded. Will find a way to make it CMS changeable.
 *
 * @returns {React.ReactNode} The paragraph text in the About Us section
 */
const AboutUsText: React.FC<any> = () => {
    return (
        <STText color="#fff" textAlign={["center", "center", "left"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.{" "}
        </STText>
    );
};

export default AboutUsText;
