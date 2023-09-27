import AboutUsShowcaseImg from "@/public/assets/images/about/about_us_image.jpg";
import { GridItem } from "@chakra-ui/react";
import NextImage from "next/image";

const AboutUsImage: React.FC<any> = () => {
    return (
        <GridItem
            w="100%"
            h="100%"
            position="relative"
            minH={["300px", "400px", "600px", "0px"]}
        >
            <NextImage
                src={AboutUsShowcaseImg}
                alt={"Testing Image"}
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
