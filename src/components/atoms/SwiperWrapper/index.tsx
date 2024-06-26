import { STIconButton } from "@StorytellerComponents/atoms";
import { SwiperWrapperProps } from "./props";

import { Box } from "@chakra-ui/react";

import { useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import "swiper/swiper-bundle.css";

/**
 * The Swiper component that wraps around SwiperSlides with a set of default settings.
 * It also include 2 custom buttons for the Swiper that is positioned within the Swiper.
 * Is used whenever we want to utilize Swiper package.
 * Wrap the entire thing inside a box. By changing the "display" properties of the box and "position" propoerties of the buttons,
 * we can modify the entire layout of the swiper.
 *
 * @param {SwiperWrapperProps} props The properties for the component. The children will be wrapped around by the component while the leftButtonProps and rightButtonProps is used to modify the navigation buttons. Box Props is used to allow for different swiper layouts
 * @returns {React.ReactNode} The Swiper wrapping around SwiperSlides
 */
const SwiperWrapper: React.FC<SwiperWrapperProps> = (props: SwiperWrapperProps): React.ReactNode => {
    const {
        children,
        leftButtonProps,
        rightButtonProps,
        boxProps,
        ...swiperProps
    } = props;

    const prevButtonRef = useRef<HTMLButtonElement>(null);
    const nextButtonRef = useRef<HTMLButtonElement>(null);

    return (
        <Box display="flex" alignItems="center" {...boxProps}>
            <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                pagination={{
                    clickable: true,
                }}
                onInit={(swiper: any) => {
                    swiper.params.navigation.prevEl = prevButtonRef.current;
                    swiper.params.navigation.nextEl = nextButtonRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                loop={true}
                autoplay={{ delay: 5000 }}
                style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                }}
                {...swiperProps}
            >
                {children}
                {/* Absolute buttons to include it within the swiper */}
                <STIconButton
                    position="absolute"
                    zIndex="2"
                    left="0"
                    ref={prevButtonRef}
                    {...leftButtonProps}
                />
                <STIconButton
                    position="absolute"
                    zIndex="2"
                    right="0"
                    ref={nextButtonRef}
                    {...rightButtonProps}
                />
            </Swiper>
        </Box>
    );
};

export default SwiperWrapper;
