import { defaultAboutUsData } from "@Storyteller/data/defaultAboutUsData";
import { STText } from "@StorytellerComponents/atoms";
import { AboutUsTextProps } from "./props";

/**
 * The component that contains the About Us write up text.
 * The text currently is hard-coded. Will find a way to make it CMS changeable.
 *
 * @param {AboutUsTextProps} props The text content for the component
 * @returns {React.ReactNode} The paragraph text in the About Us section
 */
const AboutUsText: React.FC<AboutUsTextProps> = (props: AboutUsTextProps): React.ReactNode => {
    const { aboutUsPreviewText } = props;

    // If no data fetched from Sanity, load default preview data
    return (
        <STText color="#fff" textAlign={["center", "center", "left"]}>
            {aboutUsPreviewText
                ? aboutUsPreviewText
                : defaultAboutUsData.preview.body}
        </STText>
    );
};

export default AboutUsText;
