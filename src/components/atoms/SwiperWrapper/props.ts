import { SwiperProps } from "swiper/react";
import { STIconButtonProps } from "../STIconButton/props";

export interface SwiperWrapperProps extends SwiperProps {
    children: React.ReactNode;
    leftButtonProps?: STIconButtonProps;
    rightButtonProps?: STIconButtonProps;
}
