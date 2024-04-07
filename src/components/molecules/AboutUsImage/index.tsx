import AboutUsShowcaseImg from "@/public/assets/images/about/about_us_image.jpg";

import { GridItem } from "@chakra-ui/react";
import NextImage from "next/image";

/**
 * The component that renders the showcase image at the About Us section
 * It utilizes the NextImage component + some dynamic scaling.
 *
 * @returns {React.ReactNode} The rendered showcase Image in the About Us component
 */
const AboutUsImage: React.FC<any> = (): React.ReactNode => {
    return (
        <GridItem
            w="100%"
            h="100%"
            position="relative"
            minH={["300px", "400px", "600px", "0px"]}
        >
            <NextImage
                src={AboutUsShowcaseImg}
                alt={"About Us Showcase Image"}
                fill={true}
                style={{
                    borderRadius: "50px",
                    objectFit: "cover",
                    objectPosition: "center",
                }}
                placeholder="blur"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 50vw"
            />
        </GridItem>
    );
};

export default AboutUsImage;
