import { ourTeamData } from "@Storyteller/data/ourTeamData";
import {
    STComponentWrapper,
    STHeading,
    SwiperWrapper,
} from "@StorytellerComponents/atoms";
import { OurTeamCard } from "@StorytellerComponents/molecules";
import { Box } from "@chakra-ui/react";
import { SwiperSlide } from "swiper/react";

const OurTeam: React.FC<any> = () => {
    const leftButtonProps = {
        "aria-label": "Previous Team Member",
        iconSrc: "/assets/icon/left-nav-arrow-white.svg",
        iconAlt: "Nav Arrow Left",
        border: "2px solid #EFEDE7",
        iconWidth: ["20px", "30px", "40px", "50px"],
        borderRadius: "100%",
        p: "15px",
        mr: ["0.5rem", "1rem"],
        ml: ["1rem"],
        mt: ["1rem", "2rem"],
        _hover: {
            backgroundColor: "#7E7F7A",
            border: "2px solid transparent",
        },
    };

    const rightButtonProps = {
        "aria-label": "Next Team Member",
        iconSrc: "/assets/icon/right-nav-arrow-white.svg",
        iconAlt: "Nav Arrow Right",
        iconWidth: ["20px", "30px", "40px", "50px"],
        border: "2px solid #EFEDE7",
        borderRadius: "100%",
        p: "15px",
        ml: ["0.5rem", "1rem"],
        mt: ["1rem", "2rem"],
        _hover: {
            backgroundColor: "#7E7F7A",
            border: "2px solid transparent",
        },
    };

    return (
        <STComponentWrapper
            display="flex"
            w="100%"
            flexDir={"column"}
            py="0rem"
            pb={["3rem", "5rem"]}
            // borderTop="2px solid #EFEDE7"
        >
            <Box
                w="100%"
                background="#444444"
                px={["0rem", "2rem", "5rem"]}
                py={["5rem"]}
            >
                <STHeading
                    color="white"
                    textDecor="underline"
                    pb={["2rem", "3rem"]}
                    pl={["1rem", "0rem"]}
                    fontSize={["4xl", "4xl", "5xl", "5xl", "6xl", "6xl"]}
                >
                    Our Team
                </STHeading>
                <SwiperWrapper
                    style={{
                        padding: "1rem",
                    }}
                    leftButtonProps={{
                        ...leftButtonProps,
                        position: "relative",
                    }}
                    rightButtonProps={{
                        ...rightButtonProps,
                        position: "relative",
                    }}
                    boxProps={{ display: "block" }}
                    slidesPerView={3}
                    spaceBetween={"50px"}
                    pagination={{ enabled: false }}
                    loop={false}
                    autoCorrect="true"
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        480: { slidesPerView: 2 },
                        768: { slidesPerView: 2 },
                        1280: { slidesPerView: 3 },
                    }}
                >
                    {ourTeamData.map((member) => {
                        return (
                            <SwiperSlide key={member.name}>
                                <OurTeamCard
                                    name={member.name}
                                    imgUrl={member.imgUrl}
                                    companyPos={member.companyPos}
                                />
                            </SwiperSlide>
                        );
                    })}
                </SwiperWrapper>
            </Box>
        </STComponentWrapper>
    );
};

export default OurTeam;
