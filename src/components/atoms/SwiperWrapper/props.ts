import { SwiperProps } from "swiper/react";
import { STIconButtonProps } from "../STIconButton/props";
import { BoxProps } from "@chakra-ui/react";

export interface SwiperWrapperProps extends SwiperProps {
    children: React.ReactNode;
    leftButtonProps?: STIconButtonProps;
    rightButtonProps?: STIconButtonProps;
    boxProps?: BoxProps;
}
