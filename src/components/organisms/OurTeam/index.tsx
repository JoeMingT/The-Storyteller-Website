import {
    STComponentWrapper,
    STHeading,
    SwiperWrapper,
} from "@StorytellerComponents/atoms";
import { OurTeamCard } from "@StorytellerComponents/molecules";

import { Box } from "@chakra-ui/react";
import { SwiperSlide } from "swiper/react";
import { OurTeamProps } from "./props";

/**
 * The component that renders the Our Team section in the About Page.
 * This component is very, very scuffed. Mainly due to SwiperWrapper component.
 * It mainly contains the short profile of all the members in the company.
 * ** Plan to add a modal popup that will show more details of the selected members.
 *
 * @param {OurTeamProps} props The properties for the component. All of the data for the component.
 * @returns {React.ReactNode} The rendered Our Team component in the About Page
 */
const OurTeam: React.FC<OurTeamProps> = (props: OurTeamProps): React.ReactNode => {
    const { ourTeamData } = props;

    // Props for the buttons
    // This includes the styling (to make it look round + the hover effects)
    // and also the position and display, that makes it below the swiper
    const leftButtonProps = {
        "aria-label": "Previous Team Member",
        iconSrc: "/assets/icon/left-nav-arrow-black.svg",
        iconAlt: "Nav Arrow Left",
        border: "2px solid #444444",
        iconWidth: ["20px", "30px", "40px", "50px"],
        borderRadius: "100%",
        p: "15px",
        mr: ["0.5rem", "1rem"],
        ml: ["1rem"],
        mt: ["2rem", "3rem"],
        _hover: {
            backgroundColor: "#CAB8B9",
            border: "2px solid transparent",
        },
    };

    const rightButtonProps = {
        "aria-label": "Next Team Member",
        iconSrc: "/assets/icon/right-nav-arrow-black.svg",
        iconAlt: "Nav Arrow Right",
        iconWidth: ["20px", "30px", "40px", "50px"],
        border: "2px solid #444444",
        borderRadius: "100%",
        p: "15px",
        ml: ["0.5rem", "1rem"],
        mt: ["2rem", "3rem"],
        _hover: {
            backgroundColor: "#CAB8B9",
            border: "2px solid transparent",
        },
    };

    return (
        <STComponentWrapper
            display="flex"
            w="100%"
            flexDir={"column"}
            pt="0rem"
            // borderTop="2px solid #EFEDE7"
        >
            <Box
                w="100%"
                backgroundColor="secondary"
                px={["0rem", "2rem", "5rem"]}
                py={["5rem"]}
            >
                <STHeading
                    color="black"
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
                    // Properties for the Swiper
                    slidesPerView={3}
                    spaceBetween={"50px"}
                    pagination={{ enabled: false }}
                    loop={false}
                    autoCorrect="true"
                    // Breakpoints for the swiper. To do responsiveness for the number of slides shown
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        480: { slidesPerView: 2 },
                        768: { slidesPerView: 2 },
                        1280: { slidesPerView: 3 },
                    }}
                >
                    {ourTeamData?.map((member) => {
                        return (
                            <SwiperSlide key={member._id}>
                                <OurTeamCard
                                    name={member.name}
                                    imgUrl={member.profilePic}
                                    companyPos={member.position}
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
