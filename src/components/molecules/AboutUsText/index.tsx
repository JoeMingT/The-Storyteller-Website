import { STText } from "@StorytellerComponents/atoms";
import { AboutUsTextProps } from "./props";

/**
 * The component that contains the About Us write up text.
 * The text currently is hard-coded. Will find a way to make it CMS changeable.
 *
 * @returns {React.ReactNode} The paragraph text in the About Us section
 */
const AboutUsText: React.FC<AboutUsTextProps> = (props) => {
    const { aboutUsPreviewText } = props;
    return (
        <STText color="#fff" textAlign={["center", "center", "left"]}>
            {aboutUsPreviewText}
        </STText>
    );
};

export default AboutUsText;
