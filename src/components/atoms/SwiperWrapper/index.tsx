import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import "swiper/swiper-bundle.css";
import { STIconButton } from "..";
import { SwiperWrapperProps } from "./props";

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
