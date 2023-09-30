import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import "swiper/swiper-bundle.css";

import { STIconButton } from "@StorytellerComponents/atoms";
import { useRef } from "react";
import { SwiperWrapperProps } from "./props";

/**
 * The Swiper component that wraps around SwiperSlides with a set of default settings.
 * It also include 2 custom buttons for the Swiper that is positioned within the Swiper.
 * Is used whenever we want to utilize Swiper package.
 *
 * @param {SwiperWrapperProps} props The properties for the component. The children will be wrapped around by the component while the leftButtonProps and rightButtonProps is used to modify the navigation buttons
 * @returns {React.ReactNode} The Swiper wrapping around SwiperSlides
 */
const SwiperWrapper: React.FC<SwiperWrapperProps> = (props) => {
    const prevButtonRef = useRef<HTMLButtonElement>(null);
    const nextButtonRef = useRef<HTMLButtonElement>(null);

    const { children, leftButtonProps, rightButtonProps, ...swiperProps } =
        props;
    return (
        <Swiper
            breakpoints={{}}
            modules={[Navigation, Pagination, A11y, Autoplay]}
            navigation={{
                prevEl: prevButtonRef.current,
                nextEl: nextButtonRef.current,
            }}
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
            {/* Absolute buttons to include it within the swiper */}
            <STIconButton
                position="absolute"
                zIndex="2"
                left="0"
                ref={prevButtonRef}
                {...leftButtonProps}
            />
            {children}
            <STIconButton
                position="absolute"
                zIndex="2"
                right="0"
                ref={nextButtonRef}
                {...rightButtonProps}
            />
        </Swiper>
    );
};

export default SwiperWrapper;
